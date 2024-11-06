from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from sqlalchemy.orm import Session
from script import import_csv_to_db
from database import SessionLocal, init_db
from schemas import ArrondissementTreeCount, TypeTreeCount
from crud import get_tree_count_by_arrondissement, get_tree_count_by_type

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.on_event("startup")
def startup_event():
    init_db()
    db = SessionLocal()
    import_csv_to_db("./public/trees.csv", db)
    db.close()


@app.get("/")
def read_root():
    return {"message": "Arbres de Paris API!"}


@app.get("/trees/arrondissements", response_model=List[ArrondissementTreeCount])
def read_trees_by_arrondissement(db: Session = Depends(get_db)):
    return get_tree_count_by_arrondissement(db)


@app.get("/trees/type", response_model=List[TypeTreeCount])
def read_trees_by_type(db: Session = Depends(get_db)):
    return get_tree_count_by_type(db)
