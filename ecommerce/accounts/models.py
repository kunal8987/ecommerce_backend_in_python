"""
This line brings in tools from Django to help us:

AbstractBaseUser: Basic user model (with password handling).

BaseUserManager: Helps manage (create/save) users.

PermissionsMixin: Adds support for Django permissions and groups.

models: Used to define database models (like tables).
"""

from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models


# Custom manager for User model
class UserManager(BaseUserManager):
    # Method to create a regular user
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        email = self.normalize_email(email)  # Normalize the email address
        user = self.model(email=email, **extra_fields)  # Create user instance
        user.set_password(password)  # Set hashed password
        user.save(using=self._db)  # Save user to the database
        return user

    # Method to create a superuser (admin)
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)  # Superuser is staff
        extra_fields.setdefault("is_superuser", True)  # Superuser has all permissions
        return self.create_user(email, password, **extra_fields)


# Custom user model
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)  # Unique email field
    user_name = models.CharField(max_length=50, unique=True)  # Unique username
    full_name = models.CharField(max_length=255, blank=True)  # Optional full name
    is_active = models.BooleanField(default=True)  # User is active by default
    is_staff = models.BooleanField(default=False)  # User is not staff by default

    objects = UserManager()  # Assign custom manager

    USERNAME_FIELD = "email"  # Use email as the unique identifier
    REQUIRED_FIELDS = []  # No additional required fields

    def __str__(self):
        return self.email  # String representation returns the email
