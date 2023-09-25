import smtplib
#Set up email
email='dangquangtrung096@gmail.com'
password='owblbredcnapbslh'
email_sent='dangquangtrung096@gmail.com'
#Xl
session=smtplib.SMTP('smtp.gmail.com',587)
session.starttls() #enable security
session.login(email,password)
#Noi dung
mail_content='''Subject: hello
quang trung test python
hihihi '''
session.sendmail(email,email_sent,mail_content)
print('mail sent')
