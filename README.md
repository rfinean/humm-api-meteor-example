# HummRinger 

The classic radio song-intros competition, played amongst friends in a chatroom. Five seconds of a song intro is played and the contestants have to guess the artist before anyone else in the chatroom.

* We use the [Humm Web API](http://developers.myhumm.com/web/auth-guide) and [Humm meteor package](https://atmospherejs.com/humm/humm) to source the music.

* We use the [William Hill Accounts API](https://developer.williamhill.com/content/accounts-api) for chatroom IDs. We were thinking of their [Communities API](https://developer.williamhill.com/api/communities-api) for chatrooms or the loser of a game donating £1 to charity.

* We use the [Twilio API](https://www.twilio.com/docs/tutorials/broadcast) to allow offline users to receive the song intro by phonecall and text the artist name back to the same number.

## Installation

This a meteor project, [see get started with Meteor](https://www.meteor.com/install) for instructions on how to install it and get started. You also need to install a Humm library:
	
	$  meteor add humm:humm

## Running the server

    $  meteor

Then, open `http:/127.0.0.1:3000` in a browser.