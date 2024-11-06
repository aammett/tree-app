from sqlalchemy import Column, Integer, String, DateTime, Float, JSON
from database import Base


class Tree(Base):
    __tablename__ = "tree"

    id = Column(Integer, primary_key=True, index=True, unique=True)
    management_domain = Column(String, nullable=True)
    arrondissement = Column(String, nullable=True)
    address_complement = Column(String, nullable=True)
    site_address = Column(String, nullable=True)
    circumference_cm = Column(Integer, nullable=True)
    height_m = Column(Integer, nullable=True)
    species_variety = Column(String, nullable=True)
    cultivar = Column(String, nullable=True)
    type = Column(String, nullable=True)
    planted_on = Column(DateTime, nullable=True)
    french_name = Column(String, nullable=True)
    geo_shape = Column(JSON, nullable=True)
