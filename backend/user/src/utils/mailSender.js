import nodemailer from "nodemailer";

export const sendInquiryMailToAdmin = async ({ userId, title, content }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"오메추 고객 문의" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `📩 [오메추 문의] ${title}`,
    html: `
      <div style="
        max-width: 600px;
        margin: 0 auto;
        padding: 24px;
        font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', Arial, sans-serif;
        background-color: #f9f9fb;
        color: #333;
      ">
        <div style="
          background-color: #ffffff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        ">
          <h2 style="
            margin-top: 0;
            color: #6b4eff;
            font-size: 20px;
          ">
            📩 새로운 문의가 접수되었습니다
          </h2>

          <table style="width: 100%; margin-top: 16px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px;">
                사용자 ID
              </td>
              <td style="padding: 8px 0;">
                ${userId}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">
                문의 제목
              </td>
              <td style="padding: 8px 0;">
                ${title}
              </td>
            </tr>
          </table>

          <div style="
            margin-top: 20px;
            padding: 16px;
            background-color: #f4f5f7;
            border-radius: 8px;
            white-space: pre-wrap;
            line-height: 1.6;
          ">
            ${content}
          </div>
        </div>

        <p style="
          margin-top: 16px;
          font-size: 12px;
          color: #888;
          text-align: center;
        ">
          본 메일은 오메추 앱의 이메일 문의 기능을 통해 자동 발송되었습니다.
        </p>
      </div>
    `,
  });
};
