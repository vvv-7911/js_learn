const nodeMailer = require('nodemailer');
const fs = require('fs');
const juice = require('juice');
const ejs = require('ejs');

const transporter = nodeMailer.createTransport({
    service: 'qq',
    port: 465,  // smtp
    secureConnection: true,
    auth: {
        user: '892518104@qq.com',
        pass: 'mnqlghmottqabegf'
    }
});
const html = fs.readFileSync('./template/index.ejs', 'utf8');
const template = ejs.compile(html);
const afterHtml = template({
    userName: 'userName'
})
const css = fs.readFileSync('./template/index.css', 'utf8')
// const afterWithInCss = juice(afterhtml);
const afterWithInCss = juice.inlineContent(afterHtml, css);
transporter.sendMail({
    to: '892518104@qq.com',
    html: afterWithInCss,
    from: '892518104@qq.com',
    subject: 'vvv 7911 '
},(err, info) => {
    if(err) {
        console.log('邮件出错了', err);
    }
})