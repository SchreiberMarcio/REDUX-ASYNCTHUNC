import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Wizard {
  id: string;
  name: string;
  image: string;
  wizard: boolean;
  house: string | null;
}

interface CardWizardProps {
  wizardData: Wizard;
}

export function CardWizard({ wizardData }: CardWizardProps) {
  const { name, image, wizard, house } = wizardData;

  const altText = `${name} - ${wizard ? "Mago" : "Não Mago"} da casa ${
    house || "sem casa"
  }`;

  return (
    <Card>
      <CardMedia component="img" image={image} alt={altText} />

      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>

        <Typography variant="h6">Wizard: {wizard ? "Sim" : "Não"}</Typography>

        <Typography variant="h6">House: {house || "Não possui"}</Typography>
      </CardContent>
    </Card>
  );
}
