import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export const SaveReport = () => {

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div>
      <Button
        variant="success"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        href="/prof/ReportSucess"
      >
        {isLoading ? 'Generando reporte...' : 'Generar reporte'}
      </Button>
    </div>
  )
}
