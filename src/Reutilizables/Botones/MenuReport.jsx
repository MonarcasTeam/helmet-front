import React, { useEffect, useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";

export const MenuReport = () => {

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
      <ToggleButtonGroup type="checkbox" className="mb-2">
        <ToggleButton id="tbg-check-2" variant="success" value={1}>
          <Link to="/prof/ReportSucess">
            Generar Reporte
          </Link>
        </ToggleButton>
        <ToggleButton id="tbg-check-1" variant="danger" value={2}>
        <Link to="/prof/NewActividad">
          Cancelar
        </Link>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
