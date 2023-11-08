import Notiflix from "notiflix";

export const momentValidation = (data) => {
  if (data.title === "") {
    Notiflix.Notify.failure("Please Enter title");
    return null;
  }
  if (data.tag.length <= 0) {
    Notiflix.Notify.failure("Please Enter tags");
    return null;
  }
  if (data.image === "") {
    Notiflix.Notify.failure("Please select images");
    return null;
  }
  if (data.comment === "") {
    Notiflix.Notify.failure("Please add comment");
    return null;
  }
};

export const signupValidation = (data) => {
  if (data.firstname === " ") {
    Notiflix.Notify.failure("Please enter first Name");
    return null;
  }
  if (data.lastname === " ") {
    Notiflix.Notify.failure("Please enter last Name");
    return null;
  }

  if (data.mobile === "") {
    Notiflix.Notify.failure("Please enter Mobile number");
    return null;
  }
  if (data.email === "") {
    Notiflix.Notify.failure("Please enter Email");
    return null;
  }
  if (data.country === "") {
    Notiflix.Notify.failure("Please enter City");
    return null;
  }
  if (data.password === "") {
    Notiflix.Notify.failure("Please enter Password");
    return null;
  }
};
