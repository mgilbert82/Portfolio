// export default function handler(req, res) {
//   // Get data submitted in request's body.
//   const body = req.body;

//   // Optional logging to see the responses
//   // in the command line where next.js app is running.
//   console.log('body: ', body);

//   // Guard clause checks for first and last name,
//   // and returns early if they are not found
//   if (!body.name || !body.email || !body.comment) {
//     // Sends a HTTP bad request error code
//     return res
//       .status(400)
//       .json({ data: 'First or last name not found' });
//   }

//   // Found the name.
//   // Sends a HTTP success code

//   res
//     .status(200)
//     .json({ data: `${body.name} ${body.email} ${body.comment}` });
// }

import sgMail from '@sendgrid/mail';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'INVALID_METHOD' });
    return;
  }

  //Variable
  const { name, surname, email, content } = req.body;

  if (!name || !surname || !email || !content) {
    res.status(400).json({ message: 'INVALID_PARAMETER' });
    return;
  }

  //Email verification
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!pattern.test(email)) {
    res.status(400).json({ message: 'INVALID_EMAIL_ADRESS' });
    return;
  }

  //Replace break space with space
  const message = content
    .replace(/\n/g, '<br>')
    .replace(/\r/g, '<br>')
    .replace(/\t/g, '<br>')
    .replace(/<(?!br\s*\/?)[^>]+>/g, '');

  //API KEY
  sgMail.setApiKey(process.env.KEY_SENDGRID);

  //Create Email
  const sendGridMail = {
    to: 'michel@treblig.fr',
    from: 'michelgilbert@hotmail.fr',
    templateId: 'd-305183e084dc4d90a4aecf7de02cfedc',
    dynamic_template_data: {
      name: name,
      surname: surname,
      email: email,
      content: message,
    },
  };

  //Send email
  (async () => {
    try {
      await sgMail.send(sendGridMail);
      res
        .status(200)
        .json({ message: 'MESSAGE_SENDED_SUCCESSFULLY !' });
    } catch (error) {
      return res.status(500).json({ message: 'ERROR_WITH_SENDGRID' });
    }
  })();
}
