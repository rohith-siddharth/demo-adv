const styles = {
  // Shared styles
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    padding: '32px 16px',
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  // Form styles
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
  formSection: {
    flex: '2',
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#111827',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  nameGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  cityGroup: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '16px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    ':focus': {
      borderColor: '#3b82f6',
    },
  },
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#2563eb',
    },
  },
  
  // Summary styles
  summarySection: {
    flex: '1',
  },
  summaryCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  summaryHeading: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#111827',
  },
  productItem: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
  },
  productImage: {
    width: '64px',
    height: '64px',
    borderRadius: '4px',
    objectFit: 'cover',
  },
  productDetails: {
    flex: '1',
  },
  productHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4px',
  },
  productTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#111827',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#111827',
  },
  productQuantity: {
    fontSize: '14px',
    color: '#6b7280',
  },
  summaryDivider: {
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '20px 0',
  },
  summaryItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#374151',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid #e5e7eb',
  },

  // Thank You Page styles
  thankYouContainer: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    padding: '48px 16px',
  },
  thankYouWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  thankYouCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '32px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  checkmarkContainer: {
    marginBottom: '24px',
  },
  checkmark: {
    width: '64px',
    height: '64px',
    margin: '0 auto',
    color: '#10b981',
  },
  thankYouHeading: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '12px',
  },
  orderNumber: {
    fontSize: '18px',
    color: '#6b7280',
    marginBottom: '32px',
  },
  orderDetails: {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '32px',
    marginBottom: '32px',
  },
  detailsHeading: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '24px',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    textAlign: 'left',
  },
  detailsSubheading: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: '8px',
  },
  detailsText: {
    fontSize: '16px',
    color: '#111827',
    lineHeight: '1.5',
  },
  supportInfo: {
    marginTop: '32px',
    fontSize: '16px',
    color: '#6b7280',
    lineHeight: '1.5',
  },
  supportLink: {
    color: '#3b82f6',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
};

export default styles;