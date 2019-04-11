exports.service = {
    service : '<service>',
    auth : {
        user : '<username>',
        pass : '<password>'
    }
}

exports.template = (to, subject, message, attachments) => {
    return {
        to          : to,
        subject     : subject,
        html        : `
                        <div>
                            <h1>${message}</h1>
                        </div>
                      `,
        attachments : attachments

    }
}