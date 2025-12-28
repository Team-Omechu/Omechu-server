export const bodyToResetPasswordDto = (body) => {
  return { newPassword: body.newPassword };
};
