export const validPhoneNumber = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
export const validUserName = new RegExp("^[a-z0-9_ ]{6,15}$");
// export const validPassword = new RegExp(
//   "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
// );
export const validPassword = new RegExp("^[a-z0-9_ ]{6,15}$");
