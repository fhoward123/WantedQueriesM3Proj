module.exports = {
    url      : 'http://localhost:3000/#/',
    elements : {
        app              : '#root',
        version          : 'div>h6',
        pageTitle        : 'h1[class="titleBar"]',
        validHeader      : 'h4[id="validHeader"]',
        resultsTxt       : 'span[name="queryTitle"]',
        resultsBlob      : 'span[name="queryBody"]',
        homeWelcome : {
            selector       : '//div[@id="pageWrap"]/div/div',
            locateStrategy : 'xpath',
        },
        enterWanted : {
            selector       : '//li[1]/h3',
            locateStrategy : 'xpath',
        },
        enterWantedDesc : {
            selector       : '(//ul/ul/li)[1]',
            locateStrategy : 'xpath',
        },
        modifyWanted : {
            selector       : '//li[2]/h3',
            locateStrategy : 'xpath',
        },
        modifyWantedDesc : {
            selector       : '//ul[2]/li',
            locateStrategy : 'xpath',
        },
        cancelWanted : {
            selector       : '//li[3]/h3',
            locateStrategy : 'xpath',
        },
        cancelWantedDesc : {
            selector       : '//ul[3]/li',
            locateStrategy : 'xpath',
        },
        entWantedInst1 : {
            selector       : '//h4',
            locateStrategy : 'xpath',
        },
        entWantedInst2 : {
            selector       : '//td/p',
            locateStrategy : 'xpath',
        },
        // Text on Enter, Modify, and Cancel pages
        // "Input pertinent information."
        mainInstr : {
            selector       : '//*[@id="app"]/div/div/div/table/thead/tr/td/h4',
            locateStrategy : 'xpath',
        },
        // "Submit for a list of errors or an assembled query."
        generalInstr : {
            selector       : '//*[@id="app"]/div/div/div/table/thead/tr/td/p',
            locateStrategy : 'xpath',
        },
        // "Submit query for validation."
        submitQryInstr : {
            //*[@id="app"]/div/div/div/table/tbody/tr/td[2]/span[1]
            selector       : 'span[name="queryTitle"]',
            locateStrategy : 'css selector',
        },

        // Error Messages
        headerErrMsg : {
            selector       : '(//li[@class="errorMessage"])[1]',
            locateStrategy : 'xpath',
        },
        mkeErrMsg : {
            selector       : '(//li[@class="errorMessage"])[2]',
            locateStrategy : 'xpath',
        },
        oaiErrMsg : {
            selector       : '(//li[@class="errorMessage"])[3]',
            locateStrategy : 'xpath',
        },
        nameErrMsg : {
            selector       : '(//li[@class="errorMessage"])[4]',
            locateStrategy : 'xpath',
        },
        sexErrMsg : {
            selector       : '(//li[@class="errorMessage"])[5]',
            locateStrategy : 'xpath',
        },
        raceErrMsg : {
            selector       : '(//li[@class="errorMessage"])[6]',
            locateStrategy : 'xpath',
        },
        heightErrMsg : {
            selector       : '(//li[@class="errorMessage"])[7]',
            locateStrategy : 'xpath',
        },
        weightErrMsg : {
            selector       : '(//li[@class="errorMessage"])[8]',
            locateStrategy : 'xpath',
        },
        hairErrMsg : {
            selector       : '(//li[@class="errorMessage"])[9]',
            locateStrategy : 'xpath',
        },
        offenseErrMsg : {
            selector       : '(//li[@class="errorMessage"])[10]',
            locateStrategy : 'xpath',
        },
        dowErrMsg : {
            selector       : '(//li[@class="errorMessage"])[11]',
            locateStrategy : 'xpath',
        },
        driLicNumErrMsg : {
            selector       : '(//li[@class="errorMessage"])[12]',
            locateStrategy : 'xpath',
        },
        driLicStErrMsg : {
            selector       : '(//li[@class="errorMessage"])[13]',
            locateStrategy : 'xpath',
        },
        driLicExpErrMsg : {
            selector       : '(//li[@class="errorMessage"])[14]',
            locateStrategy : 'xpath',
        },
        licPltNumErrMsg : {
            selector       : '(//li[@class="errorMessage"])[15]',
            locateStrategy : 'xpath',
        },
        licPltStErrMsg : {
            selector       : '(//li[@class="errorMessage"])[16]',
            locateStrategy : 'xpath',
        },
        licPltExpErrMsg : {
            selector       : '(//li[@class="errorMessage"])[17]',
            locateStrategy : 'xpath',
        },

        // Pop-Out Menu Buttons
        menuBtn : {
            selector       : '.bm-burger-button > button',
            locateStrategy : 'css selector',
        },
        closeMenuBtn : {
            selector       : '.bm-cross-button > button',
            locateStrategy : 'css selector',
        },
        selectHome : {
            selector       : '//p[@name="homeOption"]',
            locateStrategy : 'xpath',
        },
        selectEnter : {
            selector       : '//p[@name="enterOption"]',
            locateStrategy : 'xpath',
        },
        selectModify : {
            selector       : '//p[@name="modifyOption"]',
            locateStrategy : 'xpath',
        },
        selectCancel : {
            selector       : '//p[@name="cancelOption"]',
            locateStrategy : 'xpath',
        },

        // Fields on Enter and Modify pages
        headerField : {
            selector       : '//input[@name="hdrInput"]',
            locateStrategy : 'xpath',
        },
        headerText : {
            selector       : '//span[@name="hdrHeader"]',
            locateStrategy : 'xpath',
        },
        mkeField : {
            selector       : '//input[@name="mkeInput"]',
            locateStrategy : 'xpath',
        },
        mkeText : {
            selector       : '//span[@name="mkeHeader"]',
            locateStrategy : 'xpath',
        },
        oaiField : {
            selector       : '//input[@name="oriInput"]',
            locateStrategy : 'xpath',
        },
        oaiText : {
            selector       : '//span[@name="oriHeader"]',
            locateStrategy : 'xpath',
        },
        nameField : {
            selector       : '//input[@name="namInput"]',
            locateStrategy : 'xpath',
        },
        nameText : {
            selector       : '//span[@name="namHeader"]',
            locateStrategy : 'xpath',
        },
        sexField : {
            selector       : '//select[@name="sexInput"]',
            locateStrategy : 'xpath',
        },
        sexText : {
            selector       : '//span[@name="sexHeader"]',
            locateStrategy : 'xpath',
        },
        raceField : {
            selector       : '//select[@name="racInput"]',
            locateStrategy : 'xpath',
        },
        raceText : {
            selector       : '//span[@name="racHeader"]',
            locateStrategy : 'xpath',
        },
        heightField : {
            selector       : '//input[@name="hgtInput"]',
            locateStrategy : 'xpath',
        },
        heightText : {
            selector       : '//span[@name="hgtHeader"]',
            locateStrategy : 'xpath',
        },
        weightField : {
            selector       : '//input[@name="wgtInput"]',
            locateStrategy : 'xpath',
        },
        weightText : {
            selector       : '//span[@name="wgtHeader"]',
            locateStrategy : 'xpath',
        },
        hairField : {
            selector       : '//input[@name="haiInput"]',
            locateStrategy : 'xpath',
        },
        hairText : {
            selector       : '//span[@name="haiHeader"]',
            locateStrategy : 'xpath',
        },
        offenseField : {
            selector       : '//input[@name="offInput"]',
            locateStrategy : 'xpath',
        },
        offenseText : {
            selector       : '//span[@name="offHeader"]',
            locateStrategy : 'xpath',
        },
        dowField : {
            selector       : '//input[@name="dowInput"]',
            locateStrategy : 'xpath',
        },
        dowText : {
            selector       : '//span[@name="dowHeader"]',
            locateStrategy : 'xpath',
        },
        driLicNumField : {
            selector       : '//input[@name="olnInput"]',
            locateStrategy : 'xpath',
        },
        driLicNumText : {
            selector       : '//span[@name="olnHeader"]',
            locateStrategy : 'xpath',
        },
        driLicStField : {
            selector       : '//input[@name="olsInput"]',
            locateStrategy : 'xpath',
        },
        driLicStText : {
            selector       : '//span[@name="olsHeader"]',
            locateStrategy : 'xpath',
        },
        driLicExpField : {
            selector       : '//input[@name="oldInput"]',
            locateStrategy : 'xpath',
        },
        driLicExpText : {
            selector       : '//span[@name="oldHeader"]',
            locateStrategy : 'xpath',
        },
        licPltNumField : {
            selector       : '//input[@name="licInput"]',
            locateStrategy : 'xpath',
        },
        licPltNumText : {
            selector       : '//span[@name="licHeader"]',
            locateStrategy : 'xpath',
        },
        licPltStField : {
            selector       : '//input[@name="lisInput"]',
            locateStrategy : 'xpath',
        },
        licPltStText : {
            selector       : '//span[@name="lisHeader"]',
            locateStrategy : 'xpath',
        },
        licPltExpField : {
            selector       : '//input[@name="lidInput"]',
            locateStrategy : 'xpath',
        },
        licPltExpText : {
            selector       : '//span[@name="lidHeader"]',
            locateStrategy : 'xpath',
        },
        // Fields on Modify and Cancel pages
        warrantIdField : {
            selector       : '//input[@name="widInput"]',
            locateStrategy : 'xpath',
        },
        warrantIdText : {
            selector       : '//span[@name="widHeader"]',
            locateStrategy : 'xpath',
        },
        // Fields on Cancel page
        reasonField : {
            selector       : '//input[@name="resInput"]',
            locateStrategy : 'xpath',
        },
        reasonText : {
            selector       : '//span[@name="resHeader"]',
            locateStrategy : 'xpath',
        },
        dateOfCancelField : {
            selector       : '//input[@name="datInput"]',
            locateStrategy : 'xpath',
        },
        dateOfCancelText : {
            selector       : '//span[@name="datHeader"]',
            locateStrategy : 'xpath',
        },

        // Buttons
        saveButton : {
            selector       : '//button[@id="saveBtn"]',
            locateStrategy : 'xpath',
        },
        clearButton : {
            selector       : '//button[@id="clearBtn"]',
            locateStrategy : 'xpath',
        },
    },
}