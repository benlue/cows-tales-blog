exports.execute = function(ctx, inData, cb)  {
    var  article = {
        	title: "My Insightful Article",
        	author: "Alexander Rechsteiner",
        	date: "26 July 2013",
        	body: "<p>Bacon ipsum dolor sit amet esse duis pastrami anim, pancetta fatback capicola officia tenderloin. Meatloaf culpa ut, bacon sed sausage jerky cillum est ham ad laboris ham hock dolore. Venison ut enim, aliqua elit frankfurter et incididunt consequat culpa nostrud in. Ground round venison commodo do capicola. Id commodo laborum proident nostrud cillum duis shoulder. Shank spare ribs pastrami, jowl jerky eiusmod proident tongue occaecat enim doner pancetta capicola t-bone.</p>" +
                  "<p>Id est labore, frankfurter sausage ex do dolore adipisicing aliquip shankle deserunt. Dolore culpa flank ad. Shankle pork loin chuck dolore short loin, pork sunt aliqua eiusmod brisket deserunt ut id. Id commodo laborum proident nostrud cillum duis shoulder. Shank spare ribs pastrami, jowl jerky eiusmod proident tongue occaecat enim doner pancetta capicola t-bone.</p>" +
                  "<p>Cillum beef ribs ullamco incididunt pork belly nostrud tail et reprehenderit mollit tempor shoulder. Leberkas brisket elit, short ribs ham beef ribs enim nostrud sunt sirloin. Do esse capicola shoulder, nostrud pig non officia ribeye in cillum. Nisi ham hock ex nulla laborum minim tempor beef, frankfurter velit. Ex spare ribs eiusmod do dolore adipisicing jowl beef ut. Aute proident pork chop capicola. Enim fatback meatball kielbasa esse. Id commodo laborum proident nostrud cillum duis shoulder. Shank spare ribs pastrami, jowl jerky eiusmod proident tongue occaecat enim doner pancetta capicola t-bone. Id commodo laborum proident nostrud cillum duis shoulder. Shank spare ribs pastrami, jowl jerky eiusmod proident tongue occaecat enim doner pancetta capicola t-bone.</p>" +
                  "<p>Capicola chuck in filet mignon prosciutto turkey. Ut tri-tip eiusmod pariatur. Ball tip drumstick fugiat bacon, ribeye reprehenderit dolore sausage beef kielbasa. Ex beef magna culpa labore swine venison pancetta eu irure meatball bresaola frankfurter exercitation.</p>" +
                  "<p>Aliqua fatback tenderloin ex biltong laborum minim ut swine bresaola exercitation. Beef corned beef short loin ea. Nulla ullamco eiusmod ball tip enim, ut turkey officia tail ut tenderloin id anim. Tri-tip chuck ham hock beef pancetta pork loin. Sint ham hock aliquip sausage. Excepteur incididunt ea, eu tongue filet mignon hamburger. Ut ea nostrud short loin.</p>" +
                  "<p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>",
            tags: ['OpenPGP', 'Django', 'Bitcoin', 'Security'],
        	comments: [
                {
                    avatar: '/' + ctx.caCode + '/cont/img/avatar.png',
                    avatarAlt: 'A Smart Guy',
                    nickName: 'Willy Wonka',
                    date: '27 July 2013',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
                },
                {
                    avatar: '/' + ctx.caCode + '/cont/img/avatar.png',
                    avatarAlt: 'A Smart Guy',
                    nickName: 'Willy Wonka',
                    date: '27 July 2013',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
                    isReply: true
                },
                {
                    avatar: '/' + ctx.caCode + '/cont/img/avatar.png',
                    avatarAlt: 'A Smart Guy',
                    nickName: 'Willy Wonka',
                    date: '27 July 2013',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
                },
                {
                    avatar: '/' + ctx.caCode + '/cont/img/avatar.png',
                    avatarAlt: 'A Smart Guy',
                    nickName: 'Willy Wonka',
                    date: '27 July 2013',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
                }
            ]
    	 };
    
    cb({
        errCode: 0,
        message: 'Ok',
        value: article
    });
}