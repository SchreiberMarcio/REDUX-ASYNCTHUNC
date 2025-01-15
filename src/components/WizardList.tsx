import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, wizardAsyncThunk } from "../store/modules/harryPotterSlice";
import { AppDispatch, Store } from "../store";
import { Box, Pagination } from "@mui/material";
import { CardWizard } from "../components/Card";

export function WizardList() {
  const dispatch = useDispatch<AppDispatch>();

  // Estado global
  const { loading, total, itemsList, currentPage, itemsPage } = useSelector(
    (state: Store) => state.wizard
  );

  // Busca os personagens na página atual
  useEffect(() => {
    dispatch(wizardAsyncThunk());
  }, [dispatch]);

  // Muda a página
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  // Renderização
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: "50px",
        }}
      >
        {itemsList.length > 0 ? (
          itemsList.map((wizard) => (
            <CardWizard key={wizard.id} wizardData={wizard} />
          ))
        ) : (
          <p>No wizards found!</p>
        )}
      </Box>

      {/* Paginação */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        <Pagination
          count={Math.ceil(total / itemsPage)}
          page={currentPage}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
