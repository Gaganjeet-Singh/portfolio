const emailjsConfig = {
  publicKey:
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY?.trim() || 'TW8J-8H5DRAGU4_QD',
  serviceId:
    process.env.REACT_APP_EMAILJS_SERVICE_ID?.trim() || 'portfolio_id_emailjs',
  templateId:
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID?.trim() || 'template_s0jbk3o',
};

export default emailjsConfig;
