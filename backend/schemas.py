from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime


class TreeBase(BaseModel):
    management_domain: Optional[str] = None
    arrondissement: Optional[str] = None
    address_complement: Optional[str] = None
    site_address: Optional[str] = None
    circumference_cm: Optional[int] = None
    height_m: Optional[int] = None
    species_variety: Optional[str] = None
    cultivar: Optional[str] = None
    type: Optional[str] = None
    planted_on: Optional[datetime] = None
    french_name: Optional[str] = None
    geo_shape: Optional[Dict[str, Any]] = None


class ArbreCreate(TreeBase):
    pass


class Arbre(TreeBase):
    id: int = Field(..., description="Identifiant unique de l'arbre")

    class Config:
        from_attributes = True


class ArrondissementTreeCount(BaseModel):
    arrondissement: str
    tree_count: int


class TypeTreeCount(BaseModel):
    type: str
    tree_count: int
