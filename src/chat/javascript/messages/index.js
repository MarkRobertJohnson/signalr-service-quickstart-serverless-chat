// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

module.exports = async function (context, req) {
 /* const message = req.body;
  message.sender = req.headers && req.headers['x-ms-client-principal-name'] || '';

  let recipientUserId = message.recipient;
  if (message.recipient) {
      recipientUserId = message.recipient;
      message.isPrivate = true;
  }
*/
  return {
   //   'userId': recipientUserId,
      'target': 'newMessage',
      'arguments': [ message ]
  };
};