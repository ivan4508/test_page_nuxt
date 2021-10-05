module.exports = {
    outputStyle:'scss',
	columns: 12,
	offset: "30px",
	//mobileFirst: true,
	container: {
        maxWidth: "1362px",
        fields: "30px"
    },
	breakPoints: {
        xl:{
            width:'1400px'
        },
        lg:{
            width: "992px",
        },
		md: {
            width: "768px",
        },
        sm: {
            width: "576px"
        },
        xs: {
            width: "320px"
        },/*
        xxs: {
            width: "420px",

            offset: "10px",
            fields: "5px"

        }*/
	},
    //detailedCalc: true
};