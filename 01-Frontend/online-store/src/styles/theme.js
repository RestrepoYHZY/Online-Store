const obj = {
  palette:{
    primary:{
      main:"#5F0185",

    },
    secondary:{
      main:"#fff"
    },
    common:{
      gray: "#F2F2F2"
    }

  },
  typography: {
    fontFamily: [
      'Inter Tight', 'sans-serif'
    ].join(','),
  
    
  }
  
  
  }


const styleModal = {
  position: "absolute",
  width: '50%',
  backgroundColor: "#F2F2F2",
  padding: "16px 32px 24px",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px"
}
const styleModalInvoice = {
  position: "absolute",
  width: '70%',
  backgroundColor: "#F2F2F2",
  padding: "16px 32px 24px",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px"
}

export { obj, styleModal,styleModalInvoice };