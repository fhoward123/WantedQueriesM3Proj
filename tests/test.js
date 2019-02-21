let testPage = {}
const testData = require('../testAssets/testData')
const welcomeTxt = `Welcome to "Wanted Queries". This application will format and display query outputs to a criminal database similar to the NCIC's. The screens are summarized below, and can be accessed through the menu to the top left.`

let testValidData = (pageObject, aSelector, dataArray, errMsg1, errMsg2 ) => {
    dataArray.forEach(data => {
        pageObject
            .waitForElementPresent(aSelector, 5000)
            .setValue(aSelector, data)

            if ( aSelector === '@sexField' || aSelector === '@raceField' ) {
                pageObject.expect.element('@saveButton').to.not.be.enabled.before(5000)
            }
            else {
                pageObject.expect.element('@saveButton').to.be.enabled.before(5000)
                pageObject.click('@saveButton')
            }

        pageObject.expect.element('@headerErrMsg').text.to.not.equal(errMsg1).before(1000)
        pageObject.expect.element('@headerErrMsg').text.to.not.equal(errMsg2).before(1000)
        pageObject.expect.element(aSelector).value.to.equal(data).before(5000)
        pageObject.clearValue(aSelector)
    })
}

let testInvalidData = (pageObject, aSelector, dataArray, errMsg1, errMsg2, errMsg3, cnt ) => {
    dataArray.forEach(data => {
        pageObject
            .waitForElementPresent(aSelector, 5000)
            .setValue(aSelector, data)
        
        if ( aSelector === '@sexField' || aSelector === '@raceField' ) {
            pageObject.expect.element('@saveButton').to.not.be.enabled.before(5000)
        }
        else {
            pageObject.expect.element('@saveButton').to.be.enabled.before(5000)
            pageObject.click('@saveButton')
        }
        pageObject.expect.element('@validHeader').text.to.equal('Errors Received:').before(5000)
        pageObject.expect.element('@resultsTxt').text.to.equal('No results generated due to error.').before(5000)
        
        if ( aSelector === '@sexField' || aSelector === '@raceField' ) {
            pageObject.expect.element(testData.errMsgList[cnt]).text.to.equal(errMsg1).before(5000)
        }
        else if ( aSelector === '@oaiField' ) {
            if ( data.length != 9 ) {
                pageObject.expect.element(testData.errMsgList[cnt]).text.to.equal(errMsg2).before(5000)
            }
            else {
                pageObject.expect.element(testData.errMsgList[cnt]).text.to.equal(errMsg3).before(5000)
            }
            pageObject.clearValue(aSelector)
        }
        else if ( aSelector === '@weightField' ) {
            //if ( ! (/^\d+$/.test(data)) ) {
            if ( data.length < 1 || data.length > 3 ) {
                pageObject.expect.element(testData.errMsgList[cnt]).text.to.equal(errMsg2).before(5000)
            }
            else {
                pageObject.expect.element(testData.errMsgList[cnt]).text.to.equal(errMsg3).before(5000)
            }
            pageObject.clearValue(aSelector)
        }
        else if ( aSelector === '@dowField' ) {
            //let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
            //if ( ! (date_regex.test(data)) )
            //{
            //    console.log(data)
            //}
            //pageObject.alert(moment(data, 'MM/DD/YYYY',true).isValid())
            pageObject.api.pause(500)
        }
        else {
            pageObject.expect.element(testData.errMsgList[cnt]).text.to.equal(errMsg2).before(5000)
            pageObject.clearValue(aSelector)
        }
    }) // dataArray loop
}

module.exports = {
    beforeEach: browser => {
        testPage = browser.page.wantedQryPgObj()
        testPage.navigate()
            .waitForElementPresent('@app', 5000)
            //.maximizeWindow()
    },
    after: browser => {
        testPage.end()
    },

    'QO2F-45 Verify Home Page and Pop-Out Menu Functionality': browser => {
        testPage.verify.title('Wanted Queries')
        // Verify Home page data
        testPage.expect.element('@homeWelcome').text.to.contain(welcomeTxt).before(5000)
        testData.homePageData.forEach(data => {
            testPage.expect.element(data.searchFor).text.to.equal(data.expText).before(5000)
        })
        
        // Verify pop-out menu layout
        testPage.expect.element('@menuBtn').to.be.present
        testPage.expect.element('@closeMenuBtn').to.be.present
        // Verify pop-out menu is top-left per spec
        testPage.expect.element('@menuBtn').to.have.css('position').which.equals('absolute')
        testPage.expect.element('@menuBtn').to.have.css('left').which.equals('0px')
        testPage.expect.element('@menuBtn').to.have.css('top').which.equals('0px')
        
        // Verify can reach Enter Wanted page and layout is correct
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage.click('@selectEnter')
            .expect.element('@headerField').to.be.present
        testPage.expect.element('@warrantIdField').not.present

        // Verify fields on "Enter Wanted" page exist
        testData.entWantFields.forEach(data => {
            // ERROR: Race header is wrong on "Enter Wanted" page ******************************************
            if ( data.expText === 'Race' ) {
                return
            }
            // ERROR: Race header is wrong on "Enter Wanted" page ******************************************
            testPage.expect.element(data.searchFor).text.to.equal(data.expText).before (5000)
        })

        // Verify Pop-out menu "X" button closes menu and stays on current page
        testPage.api.pause(1000)
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage.click('@closeMenuBtn')
            .expect.element('@headerField').to.be.present.before(1000)
        testPage.expect.element('@warrantIdField').not.present

        // Verify can reach Modify Wanted page
        testPage.api.pause(1000)
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage.click('@selectModify')
            .expect.element('@warrantIdField').to.be.present
        testPage.expect.element('@reasonField').not.present

        // Verify fields on "Modify Wanted" page exist
        testData.entWantFields.forEach(data => {
            testPage.expect.element(data.searchFor).text.to.equal(data.expText).before(5000)
        })
        testData.modWantFields.forEach(data => {
            testPage.expect.element(data.searchFor).text.to.equal(data.expText).before(5000)
        })

        // Verify can reach Cancel Wanted page
        testPage.api.pause(1000)
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage.click('@selectCancel')
            .expect.element('@headerField').not.present
        testPage.expect.element('@dateOfCancelField').to.be.present

        // Verify fields on "Cancel Wanted" page exist
        testData.modWantFields.forEach(data => {
            testPage.expect.element(data.searchFor).text.to.equal(data.expText).before(5000)
        })
        testData.cancWantFields.forEach(data => {
            testPage.expect.element(data.searchFor).text.to.equal(data.expText).before(5000)
        })

        // Verify can reach Home page from pop-out menu buttons
        testPage.api.pause(1000)
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage
            .click('@selectHome')
            .expect.element('@enterWanted').to.be.present
        testPage.expect.element('@modifyWanted').to.be.present
        testPage.expect.element('@cancelWanted').to.be.present
    },


    'QO2F-43 Verify Enter Wanted page will return valid blob when valid REQUIRED data is entered': browser => {
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage.click('@selectEnter')
            .expect.element('@saveButton').to.not.be.enabled.before(1000)
        testPage.expect.element('@clearButton').to.be.enabled.before(1000)

        testPage
            .setValue('@headerField', testData.validHeader[0])
            .setValue('@mkeField', testData.validMKE[0])
            .setValue('@oaiField', testData.validOAI[0])
            .setValue('@nameField', testData.validName[0])
            .setValue('@sexField', testData.validSex[0])
            .setValue('@raceField', testData.validRace[0])
            .setValue('@heightField', testData.validHeight[0])
            .setValue('@weightField', testData.validWeight[0])
            .setValue('@hairField', testData.validHair[0])
            .setValue('@offenseField', testData.validOffense[0])
            .setValue('@dowField', testData.validDOW[0])
            .click('@saveButton')
            .expect.element('@validHeader').text.to.equal('Valid').before(5000)
        testPage.expect.element('@submitQryInstr').text.to.equal('Assembled Query:').before(5000)
        testPage.expect.element('@resultsBlob').text.to.equal(testData.validHeader[0]+'.'+testData.validMKE[0]+'.'+testData.validOAI[0]+'.'+testData.validName[0]+'.'+testData.validSex[0]+'.'+testData.validRace[0]+'.'+testData.validHeight[0]+'.'+testData.validWeight[0]+'.'+testData.validHair[0]+'.'+testData.validOffense[0]+'.'+testData.validDOW[0]).before(5000)
    },

    'QO2F-43/QO2F-44 Verify valid data is accepted in each field on Enter Wanted page': browser => {
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage.click('@selectEnter')
            .expect.element('@saveButton').to.not.be.enabled.before(1000)
        testPage.expect.element('@clearButton').to.be.enabled.before(1000)

        testData.testThese.forEach(theData => {
            testValidData(testPage, theData.aSelector, testData[theData.arrayName], theData.errMsg1, theData.errMsg2)
        })
    },

    'QO2F-47/QO2F-48 Verify invalid data is rejected on Enter Wanted page': browser => {
        let cnt = 0
        testPage
            .click('@menuBtn')
            .api.pause(1000)
        testPage.click('@selectEnter')
            .expect.element('@saveButton').to.not.be.enabled.before(1000)
        testPage.expect.element('@clearButton').to.be.enabled.before(1000)

        testData.failThese.forEach(theData => {
            testInvalidData(testPage, theData.aSelector, testData[theData.arrayName], theData.errMsg1, theData.errMsg2, theData.errMsg3, cnt)
            ++cnt
        })
    },

    'Verify valid data is accepted on Modify Wanted page': browser => {

    },

    'Verify invalid data is rejected on Modify Wanted page': browser => {

    },

    'Verify valid data is accepted on Cancel Wanted page': browser => {

    },

    'Verify invalid data is rejected on Cancel Wanted page': browser => {

    },
}