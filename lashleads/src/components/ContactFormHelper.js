export const validateRecipientEmail = (value) => {
    let currentEmails = value.split(',').filter((e) => e && e.trim());
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
    for (let i = 0; i < currentEmails.length; i++) {
        if (!regex.test(currentEmails[i].replace(/\s/g, ''))) {
            // setrecipientEmailErrorMessage(
            //     `Enter valid Email(s) seperated by comma (,)`
            // );
            // setError('recipientEmail', {
            //     type: 'manual',
            // });
        }
    }
};