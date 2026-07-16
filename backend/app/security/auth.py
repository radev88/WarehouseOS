import os
from datetime import datetime, timedelta

import bcrypt

from jose import jwt


SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "warehouseos-development-secret-key"
)

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60



def hash_password(password: str):

    password_bytes = password.encode("utf-8")

    salt = bcrypt.gensalt()

    hashed = bcrypt.hashpw(
        password_bytes,
        salt
    )

    return hashed.decode("utf-8")



def verify_password(
    plain_password: str,
    hashed_password: str
):

    return bcrypt.checkpw(
        plain_password.encode("utf-8"),
        hashed_password.encode("utf-8")
    )



def create_access_token(
    data: dict,
    expires_delta: timedelta | None = None
):

    to_encode = data.copy()

    expire = (

        datetime.utcnow()

        + (

            expires_delta

            if expires_delta

            else timedelta(
                minutes=ACCESS_TOKEN_EXPIRE_MINUTES
            )

        )

    )

    to_encode.update(
        {"exp": expire}
    )

    return jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )