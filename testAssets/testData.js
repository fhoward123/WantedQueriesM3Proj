module.exports = {
    // Good Assembled "Enter Wanted" Query
    // 1111111111.aaa.111111111.11111.M.B.510.180.aaaaa.11111111.2019-02-14.1.TX.2019-02-15.111111.CA.2019-02-05

    // Good Assembled "Modify Wanted" Query
    // 1234567890.gggggggggggggg.doh.sfdgsdfg9.sgfsdg.U.U.444.222.blo.drunk.2019-02-18.gsdfgsdgfsdf.TX.2019-03-21.sdfgsdfg.CA.2019-02-27

    // Good Assembled "Cancel Wanted" Query
    // 1234567890.dfasgadgadgafdgsdagfdg.2019-04-18

    errMsgList : [
        '@headerErrMsg',
        '@mkeErrMsg',
        '@oaiErrMsg',
        '@nameErrMsg',
        '@sexErrMsg',
        '@raceErrMsg',
        '@heightErrMsg',
        '@weightErrMsg',
        '@hairErrMsg',
        '@offenseErrMsg',
        '@dowErrMsg',
        '@driLicNumErrMsg',
        '@driLicStErrMsg',
        '@driLicExpErrMsg',
        '@licPltNumErrMsg',
        '@licPltStErrMsg',
        '@licPltExpErrMsg',
    ],

    // Selectors and error messages to loop through when checking valid data
    testThese: [
        {
            aSelector : '@headerField',
            errMsg1   : 'The field named "Header" must be included.',
            errMsg2   : 'The "Header" field should be between 9 and 19 characters long.',
            errMsg3   : '',
            arrayName : 'validHeader',
        },
        {
            aSelector : '@mkeField',
            errMsg1   : 'The field named "MKE" must be included.',
            errMsg2   : 'The "MKE" field should be between 2 and 4 characters long.',
            errMsg3   : '',
            arrayName : 'validMKE',
        },
        {
            aSelector : '@oaiField',
            errMsg1   : 'The field named "Originating Agency Identifier" must be included.',
            errMsg2   : 'The "Originating Agency Identifier" field should be 9 characters long.',
            errMsg3   : 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
            arrayName : 'validOAI',
        },
        {
            aSelector : '@nameField',
            errMsg1   : 'The field named "Name" must be included.',
            errMsg2   : 'The "Name" field should be between 3 and 30 characters long.',
            errMsg3   : '',
            arrayName : 'validName',
        },
        {
            aSelector : '@sexField',
            errMsg1   : 'The field named "Sex" must be included.',
            errMsg2   : 'The "Sex" field should be 1 character long.',
            errMsg3   : '',
            arrayName : 'validSex',
        },
        {
            aSelector : '@raceField',
            errMsg1   : 'The field named "Race" must be included.',
            errMsg2   : 'The "Race" field should be 1 character long.',
            errMsg3   : '',
            arrayName : 'validRace',
        },
        {
            aSelector : '@heightField',
            errMsg1   : 'The field named "Height" must be included.',
            errMsg2   : 'The "Height" field should be 3 characters long.',
            errMsg3   : 'The "Height" field can only include numeric characters.',
            arrayName : 'validHeight',
        },
        {
            aSelector : '@weightField',
            errMsg1   : 'The field named "Weight" must be included.',
            errMsg2   : 'The "Weight" field should be between 1 and 3 characters long.',
            errMsg3   : 'The "Weight" field can only include numeric characters.',
            arrayName : 'validWeight',
        },
        {
            aSelector : '@hairField',
            errMsg1   : 'The field named "Hair" must be included.',
            errMsg2   : 'The "Hair" field should be between 3 and 10 characters long.',
            errMsg3   : 'The "Hair" field can only include characters from the English Alphabet or special characters.',
            arrayName : 'validHair',
        },
        {
            aSelector : '@offenseField',
            errMsg1   : 'The field named "Offense" must be included.',
            errMsg2   : 'The "Offense" field should be between 5 and 15 characters long.',
            errMsg3   : '',
            arrayName : 'validOffense',
        },
        {
            aSelector : '@dowField',
            errMsg1   : 'The field named "Date of Warrant/Violation" must be included.',
            errMsg2   : 'The "Date of Warrant/Violation" field should be 10 characters long.',
            errMsg3   : 'The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.',
            arrayName : 'validDOW',
        },
        {
            aSelector : '@driLicNumField',
            errMsg1   : 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.',
            errMsg2   : 'The "Drivers License" field should be between 1 and 20 characters long.',
            errMsg3   : '',
            arrayName : 'validDlNum',
        },
        {
            aSelector : '@driLicStField',
            errMsg1   : 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.',
            errMsg2   : 'The "DL State" field should be 2 characters long.',
            errMsg3   : 'The "DL State" field can only include a valid State/Territory abbreviation.',
            arrayName : 'validState',
        },
        {
            aSelector : '@driLicExpField',
            errMsg1   : 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.',
            errMsg2   : 'The "DL Expiration Date" field should be 10 characters long.',
            errMsg3   : 'The "DL Expiration Date" field can only include numeric characters.',
            arrayName : 'validDlExp',
        },
        {
            aSelector : '@licPltNumField',
            errMsg1   : 'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.',
            errMsg2   : 'The "License Plate" field should be between 5 and 8 characters long.',
            errMsg3   : 'The "License Plate" field can only include characters from the English Alphabet or numeric characters.',
            arrayName : 'validLicPlt',
        },
        {
            aSelector : '@licPltStField',
            errMsg1   : 'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.',
            errMsg2   : 'The "License State" field should be 2 characters long.',
            errMsg3   : 'The "License State" field can only include a valid State/Territory abbreviation.',
            arrayName : 'validState',
        },
        {
            aSelector : '@licPltExpField',
            errMsg1   : 'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.',
            errMsg2   : 'The "License Expiration Date" field should be 10 characters long.',
            errMsg3   : 'The "License Expiration Date" field can only include numeric characters.',
            arrayName : 'validLpExp',
        },
    ],

    // Selectors and error messages to loop through when checking invalid data
    failThese: [
        {
            aSelector : '@headerField',
            errMsg1   : 'The field named "Header" must be included.',
            errMsg2   : 'The "Header" field should be between 9 and 19 characters long.',
            errMsg3   : '',
            arrayName : 'invalidHeader',
        },
        {
            aSelector : '@mkeField',
            errMsg1   : 'The field named "MKE" must be included.',
            errMsg2   : 'The "MKE" field should be between 2 and 4 characters long.',
            errMsg3   : '',
            arrayName : 'invalidMKE',
        },
        {
            aSelector : '@oaiField',
            errMsg1   : 'The field named "Originating Agency Identifier" must be included.',
            errMsg2   : 'The "Originating Agency Identifier" field should be 9 characters long.',
            errMsg3   : 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
            arrayName : 'invalidOAI',
        },
        {
            aSelector : '@nameField',
            errMsg1   : 'The field named "Name" must be included.',
            errMsg2   : 'The "Name" field should be between 3 and 30 characters long.',
            errMsg3   : '',
            arrayName : 'invalidName',
        },
        {
            aSelector : '@sexField',
            errMsg1   : 'The field named "Sex" must be included.',
            errMsg2   : 'The "Sex" field should be 1 character long.',
            errMsg3   : '',
            arrayName : 'invalidSex',
        },
        {
            aSelector : '@raceField',
            //errMsg1   : 'The field named "Race" must be included.',
            errMsg1   : 'The field named "Race / Ethnicity" must be included.',
            errMsg2   : 'The "Race" field should be 1 character long.',
            errMsg3   : '',
            arrayName : 'invalidRace',
        },
        {
            aSelector : '@heightField',
            errMsg1   : 'The field named "Height" must be included.',
            errMsg2   : 'The "Height" field should be 3 characters long.',
            errMsg3   : 'The "Height" field can only include numeric characters.',
            arrayName : 'invalidHeight',
        },
        {
            aSelector : '@weightField',
            errMsg1   : 'The field named "Weight" must be included.',
            errMsg2   : 'The "Weight" field should be between 1 and 3 characters long.',
            errMsg3   : 'The "Weight" field can only include numeric characters.',
            arrayName : 'invalidWeight',
        },
        {
            aSelector : '@hairField',
            errMsg1   : 'The field named "Hair" must be included.',
            errMsg2   : 'The "Hair" field should be between 3 and 10 characters long.',
            errMsg3   : 'The "Hair" field can only include characters from the English Alphabet or special characters.',
            arrayName : 'invalidHair',
        },
        {
            aSelector : '@offenseField',
            errMsg1   : 'The field named "Offense" must be included.',
            errMsg2   : 'The "Offense" field should be between 5 and 15 characters long.',
            errMsg3   : '',
            arrayName : 'invalidOffense',
        },
        {
            aSelector : '@dowField',
            errMsg1   : 'The field named "Date of Warrant/Violation" must be included.',
            errMsg2   : 'The "Date of Warrant/Violation" field should be 10 characters long.',
            errMsg3   : 'The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.',
            arrayName : 'invalidDOW',
        },

        {
            aSelector : '@driLicNumField',
            errMsg1   : 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.',
            errMsg2   : 'The "Drivers License" field should be between 1 and 20 characters long.',
            errMsg3   : '',
            arrayName : 'invalidDlNum',
        },
        {
            aSelector : '@driLicStField',
            errMsg1   : 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.',
            errMsg3   : 'The "DL State" field should be 2 characters long.',
            errMsg2   : 'The "DL State" field can only include a valid State/Territory abbreviation.',
            arrayName : 'invalidState',
        },
        {
            aSelector : '@driLicExpField',
            errMsg1   : 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.',
            errMsg2   : 'The "DL Expiration Date" field should be 10 characters long.',
            errMsg3   : 'The "DL Expiration Date" field can only include numeric characters.',
            arrayName : 'invalidDlExp',
        },
        {
            aSelector : '@licPltNumField',
            errMsg1   : 'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.',
            errMsg2   : 'The "License Plate" field should be between 5 and 8 characters long.',
            errMsg3   : 'The "License Plate" field can only include characters from the English Alphabet or numeric characters.',
            arrayName : 'invalidLicPlt',
        },
        {
            aSelector : '@licPltStField',
            errMsg1   : 'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.',
            errMsg2   : 'The "License State" field should be 2 characters long.',
            errMsg3   : 'The "License State" field can only include a valid State/Territory abbreviation.',
            arrayName : 'invalidState',
        },
        {
            aSelector : '@licPltExpField',
            errMsg1   : 'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.',
            errMsg2   : 'The "License Expiration Date" field should be 10 characters long.',
            errMsg3   : 'The "License Expiration Date" field can only include numeric characters.',
            arrayName : 'invalidLpExp',
        },

    ],

    testModWarrant: [
        {
            aSelector : '@warrantIdField',
            errMsg1   : 'The field named "Warrant ID" must be included.',
            errMsg2   : 'The "Warrant ID" field should be 10 characters long.',
            errMsg3   : 'The "Warrant ID" field can only include numeric characters.',
        },
    ],
    
    testCancWarrant: [
        {
            aSelector : '@warrantIdField',
            errMsg1   : 'The field named "Warrant ID" must be included.',
            errMsg2   : 'The "Warrant ID" field should be 10 characters long.',
            errMsg3   : 'The "Warrant ID" field can only include numeric characters.',
        },
        {
            aSelector : '@reasonField',
            errMsg1   : 'The field named "Reason for Cancellation" must be included.',
            errMsg2   : 'The "Reason for Cancellation" field should be between 5 and 150 characters long.',
            errMsg3   : '',
        },
        {
            aSelector : '@dateOfCancelField',
            errMsg1   : 'The field named "Date of Cancellation" must be included.',
            errMsg2   : 'The "Date of Cancellation" field should be 10 characters long.',
            errMsg3   : 'The "Date of Cancellation" field can only include characters from the English Alphabet or numeric characters.',
        },
    ],

    // "Home Page" check
    homePageData: [
        {
            searchFor : '@version',
            expText   : 'Version 1.0',
        },
        {
            searchFor : '@pageTitle',
            expText   : 'Wanted Queries',
        },
        {
            searchFor : '@enterWanted',
            expText   : 'Enter Wanted',
        },
        {
            searchFor : '@enterWantedDesc',
            expText   : 'This query is to generate a new warrant.',
        },
        {
            searchFor : '@modifyWanted',
            expText   : 'Modify Wanted',
        },
        {
            searchFor : '@modifyWantedDesc',
            expText   : 'This query is to modify an existing warrant.',
        },
        {
            searchFor : '@cancelWanted',
            expText   : 'Cancel Wanted',
        },
        {
            searchFor : '@cancelWantedDesc',
            expText   : 'This query is to close out an existing warrant.',
        },
    ],

    // "Enter Wanted" page header text to check
    entWantFields: [
        {
            searchFor : '@mainInstr',
            expText   : 'Input pertinent information.',
        },
        {
            searchFor :'@generalInstr',
            expText   : 'Submit for a list of errors or an assembled query.',
        },
        {
            searchFor : '@submitQryInstr',
            expText   : 'Submit query for validation.',
        },
        {
            searchFor : '@saveButton',
            expText   : 'Submit',
        },
        {
            searchFor : '@clearButton',
            expText   : 'Clear',
        },
        {
            searchFor : '@headerText',
            expText   : 'Header',
        },
        {
            searchFor : '@mkeText',
            expText   : 'MKE',
        },
        {
            searchFor : '@oaiText',
            expText   : 'Originating Agency Identifier',
        },
        {
            searchFor : '@nameText',
            expText   : 'Name',
        },
        {
            searchFor : '@sexText',
            expText   : 'Sex',
        },
        {
            searchFor : '@raceText',
            expText   : 'Race',
            //expText   : 'Race / Ethnicity',
        },
        {
            searchFor : '@heightText',
            expText   : 'Height',
        },
        {
            searchFor : '@weightText',
            expText   : 'Weight',
        },
        {
            searchFor : '@hairText',
            expText   : 'Hair',
        },
        {
            searchFor : '@offenseText',
            expText   : 'Offense',
        },
        {
            searchFor : '@dowText',
            expText   : 'Date of Warrant/Violation',
        },
        {
            searchFor : '@driLicNumText',
            expText   : 'Drivers License',
        },
        {
            searchFor : '@driLicStText',
            expText   : 'DL State',
        },
        {
            searchFor : '@driLicExpText',
            expText   : 'DL Expiration Date',
        },
        {
            searchFor : '@licPltNumText',
            expText   : 'License Plate',
        },
        {
            searchFor : '@licPltStText',
            expText   : 'License State',
        },
        {
            searchFor : '@licPltExpText',
            expText   : 'License Expiration Date',
        },
    ],

    modWantFields: [
        {
            searchFor : '@warrantIdText',
            expText   : 'Warrant ID',
        },
    ],

    cancWantFields: [
        {
            searchFor : '@dateOfCancelText',
            expText   : 'Date of Cancellation',
        },
        {
            searchFor : '@reasonText',
            expText   : 'Reason for Cancellation',
        },
        {
            searchFor : '@mainInstr',
            expText   : 'Input pertinent information.',
        },
        {
            searchFor :'@generalInstr',
            expText   : 'Submit for a list of errors or an assembled query.',
        },
        {
            searchFor : '@submitQryInstr',
            expText   : 'Submit query for validation.',
        },
        {
            searchFor : '@saveButton',
            expText   : 'Submit',
        },
        {
            searchFor : '@clearButton',
            expText   : 'Clear',
        },
    ],

    // Required data
    validHeader : [   // 9-19 any chars 
        '0aZ1YeS69',  // Lower limit
        'A12zR0qwX',
        'abcd1234Y',
        '123456789',
        'aBcDeFgHi',
        ' 01983746',
        'bbbbbbbbb',
        'GGGGGGGGG',
        '0123456789098765432',  // Upper limit
        'AbcDeFgHiJkLmNoPqRs',
        '1aUq0kelsEY7r89ickU',
        '9aBcDeFgHiJkLmNoPqR',
        'AAAAAAAAAAAAAAAAAAA',
        'zzzzzzzzzzzzzzzzzzz',
    ],
    invalidHeader : [
        //'',
        'B',
        '.',
        ',',
        '@',
        '&',
        '0',
        '1',
        'a',
        //'.........', // Valid length but invalid char
        //'.rufjfdls',
        //'j3lrk.eij',
        //'EIEIEIEI.',
        //'1234.5678',
        '0aZ1YeS6',  // Lower limit - 1
        'AzYbJsrm',
        'aQWERTYg',
        '98765432',
        '1aUq0kelsEY7r89ickU4',  // Upper limit + 1
        'AbcdefgHIJklmnOpQrsT',
        'eeeeeeeeeeeeeeeeeeee',
        'WWWWWWWWWWWWWWWWWWWW',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validMKE : [   // 2-4 alpha or special chars (no numbers or '.')
        'ab',     // 2 chars
        '  ',
        '--',
        '~@',
        '#$',
        '*&',
        'ab',
        'YZ',
        ' W',
        'z ',
        '@#$',    // 3 chars
        '%^)',
        'yhJ',
        '   ',
        '-,&',
        'IOU',
        'hum',
        'Too',
        ' a,P',   // 4 chars
        'C- q',
        '-r W',
        'aBCd',
        'ZyER',
        ',,,,',
        '----',
        '    ',
        ')(^!',
        '7d, ',
    ],
    invalidMKE : [
        //'',
        ' ',        // Lower limit - 1
        '0',
        't',
        '9',
        'H',
        '-',
        ',',
        '~',
        '*',
        '-',
        '     ',    // Upper limit + 1
        '00000',
        '12345',
        '-----',
        'zyxwv',
        'ABCDE',
        'uuVV0',
        //'....',     // Valid length but invalid chars
        //'6666',
        //'123',
        //'.10',
        //'00',
        //'99',
        //'..',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validOAI : [      // 9 alphanumeric
        '012345678',
        'aaaaaaaaa',
        'UUUUUUUUU',
        '987654321',
        'AbCdEfGhI',
        'zBdDeFgHi',
        '0aBCDef90',    
    ],
    invalidOAI : [
        //'1 e)(*&^%',  // Valid length, invalid chars
        //'abcef.ghi',  
        //'QAWXRFVK.',
        //' pouytrd ',
        //'         ',  
        //'.........',
        //'- . -. #*',
        '01234567',   // Limit - 1
        'cccccccc',
        '00000000',
        'JJJJJJJJ',
        //'        ',
        //'........',
        'tyghfjrujw',  // Limit + 1
        '9102837476',
        'A8B7C6D5E4',
        'BBBBBBBBBB',
        'i666yrhdjl',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validName : [   // 3-30 any chars
        '000',      // Minimum length
        'ggg',
        'JJJ',
        'a0Z',
        'H1O',
        '   ',
        '000000000000000000000000000000', // Max length
        'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN',
        '                              ',
        'd j u NBV 1938555 a8Hv   9eee ',
        'aslkdf woeiru ekdjdickj woier8',
        ' EIUREOUIR QWEKJFDL NCKNZAWUUW',
        'jklwaeiajf adewiouialkd lwwww ',
        '              ',    // Mid length
        'EEEEEEEEEEEEEE',
        '77777777777777',
        '   fghj   0000',
        'EUDJ 34455 jj ',
    ],
    invalidName : [
        //'...',
        //'yu.',
        //'.DF',
        //'R.D',
        //' . ',
        //'..............................',
        //'   .                          ',
        //'ajdljad. adlwoe ASKLiwe IEWIOJ',
        'Ab',    //   Minimum - 1
        '  ',
        //'..',
        '12',
        'U0',
        '4m',
        ' EIUREOUIR QWEKJFDL NCKNZAWUUWZ',   //   Max + 1
        'Ricky Ricardo and Lucille Balli',
        '123456789 0987654321 666 444444',
        'asdlkdjf wioerupqowiru xmnbxmbz',
        //'Rjklwje ioiuewe  QOQQIdkdjd1 z.',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validSex : [
        //'Female',  // "F"
        //'Male',    // "M"
        //  Not in spec:   'Other',   // "O"
        //'Unknown', // "U"
        'F',
        'M',
        'U',
    ],
    invalidSex : [
        'Guy',
        'Girl',
        'Dude',
        'Chick',
        'O',      // Not in spec but in code
        'f',      // Valid lowercase (spec indicates uppercase)
        'm',
        'u',
        '',       // Random invalid chars
        'z',
        'Z',
        '.',
        ' ',
        ',',
        '@',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validRace : [    // 1 char alphabetic ( Valid chars not in spec but are in code)
        //'Asian / Pacific Islander',  // "A"
        //'Black',  // "B"
        //'Hispanic',  // "H"
        //'American Indian / Alaskan Native',  //  "I"
        //'White',  // "W"
        //'Unknown',  // "U"
        'A',
        'B',
        'H',
        'I',
        'W',
        'U',
    ],
    invalidRace : [
        'Cracker',
        'Honky',
        'Caucasion',
        'Oriental',
        //'',      // Limit - 1
        'd',     // Invalid chars
        'G',
        '.',
        ',',
        '@',
        '*',
        'HH',    // Valid char, Limit + 1
        'IW',
        'WA',
        'A ',    // Limit + 1    
        ' B',
        '.U',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validHeight : [   // 3 numbers in FII (FeetInches) format
        '711',
        '200',
        '600',
        '411',
        '301',
        '506',
    ],
    invalidHeight : [
/*
        '555',
        '812',
        '712',
        '612',
        '513',
        '415',
        '199',
        //'',
        ' ',
        '0',
        '000',
        '999',
        '   ',
        '...',
        '@*&',
*/
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validWeight : [    // 1-3 numbers in lbs (Supposed to be forced up to 3 in code using leading zeros)
        '999',
        '000',
        '90',
        '9',
        '050',
        '099',
        '1',
    ],
    invalidWeight : [
        //'',
        '0000',
        '1000',
        '.',
        '-',
        '99.',
        '.99',
        //'150.',
        '0.9',
        'a',
        'K',
        '*',
        ' ',
        '  ',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validHair : [    // 3-10 Alpha chars
        'Blonde',
        'red',
        'Pink',
        'bLUE',
        'fgh',
        'mcjdueirkf',
        'EIRUWEJSBD',
        'AjSkDlFiGy',
        'bIEURJFLQA',
        'lavendar',
        'buttUgly',
    ],
    invalidHair : [
        //'',
        ' ',
        '.',
        '$',
        '%',
        ',',
        '-',
        // Minimum - 1
        'bl',
        'Wh',
        'BL',
        're',
        '00',
        '  ',
        '..',
        // Max + 1
        'ejejejejejz',
        //'12345678907',
        'FFFFFFFFFFF',
        'WuFiGyRmVnZ',
        '...........',
        // Valid length but invalid chars
        //'.....',
        //'--------',
        //'         ',
        //'`~@#$%^&',
        //'.,=+\|":0(',
        //'1234567',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validOffense : [    // 5-15 any chars
        // Min Chars
        '01234',
        '-9876',
        '98.43',
        ')2(&#',
        'abcde',
        'HJKLP',
        'RuFjV',
        'yHiDa',
        '3e4r5',
        '     ',
        '.....',
        // Max Chars
        '987654321012345',
        '               ',
        '...............',
        'POIUYTREWDJFHVN',
        'ridlskfjwpxvcmf',
        'Drunk and Dumbr',
        '=-+_)(*&^%$#@!~',
        '<`}{]["\|/>\\\\',
        // Midway amount
        '         ',
        '.......',
        '\\\\\\\\\\',
        'aklfakldfajg',
        '8374920982309',
        'EKDKLJ',
    ],
    invalidOffense : [
        // Min - 1
        'abcd',
        '0000',
        '1-a ',
        'RGTH',
        'a9H6',
        '.BlA',
        'P u ',
        // Max + 1
        '1234567890123456',
        'iwidkjcisw klaio',
        'widKEI.SIEjjj2kD',
        '                ',
        '................',
        '`~|}{+_)(*&^%$#@',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validDOW : [       // 10 numeric MM/DD/YYYY (1900 - (Today + 1))
        '02-15-2019',
        '01-01-1900',
        '04-01-1945',
        '02-18-2019',  // Today + 1
    ],
    invalidDOW : [
        '04-01-1945',  // Should cause failure of script cuz it is valid
        '1945-04-01',
        '04011945',
        '1899-12-31',
        '12-31-1899',
        '2019-02-21',  // Today + 2
        '02-21-2019',
        '2019-03-28',
        '06-31-2019',
        '07-31-2019',
        '2019-28-02',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],

    // Optional Data
    validDlNum : [     // 1-20 any char
        // Min char
        ' ',
        '.',
        '-',
        'a',
        'I',
        '*',
        '0',
        '5',
        '9',
        '\\',
//        '\n',
        // Max chars
        '                    ',
        '....................',
        '00000000000000000000',
        'gggggggggggggggggggg',
        'JJJJJJJJJJJJJJJJJJJJ',
        '!Qaz3$%6tg,l)9{]KDsZ',
        'Hi there, whats Up??',
        'DK-123-dkwieid-3Zk21',
        // Mid chars
        '        ',
        'die39djjafljg',
        '1837347',
        'IEIDLBCNSEKKKKWW',
        'Dje37-dkkfg_',
    ],
    invalidDlNum : [
        // Min - 1
        //'',
        // Max + 1
        '123456789012345678901',
        '                     ',
        '.....................',
        'RRRRRRRRRWRWRIWORJljE',
        'djeu37rjDFO#854)@*!~j',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validDlExp : [    // 10 numeric MM/DD/YYYY including future
        '2018-04-01',
        '04-01-2018',
        '03-30-2019',
        '2019-07-30',
        '2018/04/01',
        '04/01/2018',
        '03/30/2019',
        '2019/07/30',
    ],
    invalidDlExp : [
        '2040-31-07',
        '08-30-2030',
        '2040/31/07',
        '08/30/2030',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validLicPlt : [   // 5-8 alphanumeric
        '00000',      // Minimum
        'jjjjj',
        'UUUUU',
        '1eCk2',
        'R8g6S',
        'iK34o',
        '77777777',   // Maximum
        'wuwuwuwu',
        'ERERERER',
        '0aI9wBO1',
        'Xei678PQ',
        'tRsCc35g',
    ],
    invalidLicPlt : [
        //'',
        ' ',
        '.',
        'A',
        'z',
        '1234',   // Min - 1
        'qwer',
        'IUYT',
        '1-. ',
        'j3 *',
        '    ',
        '....',
        '123456789',  // Max + 1
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validState : [   // 2 char === state abbreviation
        // Uppercase
        'AK',
        'AL',
        'AZ',
        'AR',
        'CA',
        'CO',
        'CT',
        'DE',
        'FL',
        'GA',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'OH',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VT',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY',
        // Lowercase
        'ak',
        'al',
        'az',
        'ar',
        'ca',
        'co',
        'ct',
        'de',
        'fl',
        'ga',
        'hi',
        'id',
        'il',
        'in',
        'ia',
        'ks',
        'ky',
        'la',
        'me',
        'md',
        'ma',
        'mi',
        'mn',
        'ms',
        'mo',
        'mt',
        'ne',
        'nv',
        'nh',
        'nj',
        'nm',
        'ny',
        'nc',
        'nd',
        'oh',
        'ok',
        'or',
        'pa',
        'ri',
        'sc',
        'sd',
        'tn',
        'tx',
        'ut',
        'vt',
        'va',
        'wa',
        'wv',
        'wi',
        'wy',
        // Mixed case
        'Ak',
        'Al',
        'Az',
        'Ar',
        'Ca',
        'Co',
        'Ct',
        'De',
        'Fl',
        'Ga',
        'Hi',
        'Id',
        'Il',
        'In',
        'Ia',
        'Ks',
        'Ky',
        'La',
        'Me',
        'Md',
        'Ma',
        'Mi',
        'Mn',
        'Ms',
        'Mo',
        'Mt',
        'Ne',
        'Nv',
        'Nh',
        'Nj',
        'Nm',
        'Ny',
        'Nc',
        'Nd',
        'Oh',
        'Ok',
        'Or',
        'Pa',
        'Ri',
        'Sc',
        'Sd',
        'Tn',
        'Tx',
        'Ut',
        'Vt',
        'Va',
        'Wa',
        'Wv',
        'Wi',
        'Wy',
        // Mixed case
        'aK',
        'aL',
        'aZ',
        'aR',
        'cA',
        'cO',
        'cT',
        'dE',
        'fL',
        'gA',
        'hI',
        'iD',
        'iL',
        'iN',
        'iA',
        'kS',
        'kY',
        'lA',
        'mE',
        'mD',
        'mA',
        'mI',
        'mN',
        'mS',
        'mO',
        'mT',
        'nE',
        'nV',
        'nH',
        'nJ',
        'nM',
        'nY',
        'nC',
        'nD',
        'oH',
        'oK',
        'oR',
        'pA',
        'rI',
        'sC',
        'sD',
        'tN',
        'tX',
        'uT',
        'vT',
        'vA',
        'wA',
        'wV',
        'wI',
        'wY',
    ],
    invalidState : [
        'AA',
        'ZZ',
        'bb',
        'uu',
        '  ',
        '..',
        '',
        'A',    // Expected - 1
        ' ',
        '.',
        'T',
        'W',
        'm',
        'i',
        'w',
        'WY ',  // Expected + 1
        ' TX',
        'v a',
        'CA.',
        '.MS',
        '   ',
        '...',
        '---',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
    validLpExp : [    // 10 numeric MM/DD/YYYY including future
        '2018-04-01',
        '04-01-2018',
        '03-30-2019',
        '2019-07-30',
        '2018/04/01',
        '04/01/2018',
        '03/30/2019',
        '2019/07/30',
    ],
    invalidLpExp : [
        '2040-31-02',
        '06-31-2035',
        '2040/31/02',
        '06/31/2035',
        'ZZZZZZZZZZZZZZZZZZZZ20YYYYYYYYYYYYYYYYYYYY40aaaaaaaaaa50', // Lots
        '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960', // Tons
        'alkjdfiwer09q3834r934qewwijqrweo823r9p8fgle;if01239ujaeklda.d,dajffadiefaljdfiwiojiejaflkjafdfkadfa;weiru2o349587u34jheklf890235843918591-82r23890ufeflakd;jfgoaisrfu21098ur-28ru320ru30efudaslifsd;ajifaspeijf0239ur2890rfqrfe0wfqf023r0923rwlefjejelfjla;elfj', // Idiot Mode
    ],
}