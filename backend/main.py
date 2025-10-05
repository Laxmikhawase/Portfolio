from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

app = FastAPI()

# ✅ Step 1: Allow full CORS temporarily (safe for local dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow everything for now
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Step 2: Setup database
SQLALCHEMY_DATABASE_URL = "sqlite:///./contacts.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Contact(Base):
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    message = Column(String)

Base.metadata.create_all(bind=engine)

# ✅ Step 3: Define schema
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

# ✅ Step 4: Routes
@app.get("/")
def root():
    return {"message": "Backend working fine 🚀"}

@app.options("/api/contact")  # handle CORS preflight explicitly
async def options_contact():
    return JSONResponse(content={"message": "OK"})

@app.post("/api/contact")
async def create_contact(contact: ContactCreate, request: Request):
    db = SessionLocal()
    try:
        db_contact = Contact(
            name=contact.name,
            email=contact.email,
            message=contact.message,
        )
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        return {"success": True, "contact": contact}
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": str(e)})
    finally:
        db.close()
