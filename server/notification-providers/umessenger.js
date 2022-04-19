const NotificationProvider = require("./notification-provider");
const axios = require("axios");

class UMessenger extends NotificationProvider {

    name = "Umessenger";

    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        let okMsg = "Sent Successfully.";

        try {
            await axios.get(`https://eperfect.perfectcorp.com/UService/Service/SendMsgByUIDToken`, {
                params: {
                    UID: notification.UMessengerUID,
                    ECLToken: notification.UMessengerToken,
                    Group: notification.UMessengerUGroup,
                    Message: msg,
                },
            });
            return okMsg;

        } catch (error) {
            let msg = (error.response.data.description) ? error.response.data.description : "Error without description";
            throw new Error(msg);
        }
    }
}

module.exports = UMessenger;
