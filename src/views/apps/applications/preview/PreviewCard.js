// ** MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

import PdfItem from "src/pages/components/pdf-item";

// ** Configs
import themeConfig from "src/configs/themeConfig";

import { invoiceStatusObj, renderClient } from "src/pages/dashboards/crm/list";

import { Select, MenuItem, InputLabel } from "@mui/material";
import { RoundedTextField } from "../add/AddCard";

import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export const ResultText = ({ children, sx }) => (
  <Typography
    fontWeight={500}
    sx={{ ml: "1rem", color: "#000", ...sx }}
    variant="body"
  >
    {children}
  </Typography>
);

export const LabelText = ({ children }) => (
  <Typography variant="body2">{children}</Typography>
);

const PreviewCard = ({ data }) => {
  if (data) {
    return (
      <>
        <Card sx={{ overflow: "visible", mt: "2rem" }}>
          <CardHeader title="Dane Firmy" />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Hight Tech Sp. z o. o.</LabelText>
                  <ResultText>Hight Tech Sp. z o. o.</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Stanowisko</LabelText>
                  <ResultText>Fifth Factor</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Numer NIP</LabelText>
                  <ResultText>123-456-78-90</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Numer REGON</LabelText>
                  <ResultText>123456789</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Adres Firmy</LabelText>
                  <ResultText>ul.Mickiewicza 3/2</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Miasto</LabelText>
                  <ResultText>Warzawa</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Kod Pocztowy</LabelText>
                  <ResultText>03-288</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Numer Telefou do Firmy</LabelText>
                  <ResultText>+48 501 456 890</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Adres Email do Firmy</LabelText>
                  <ResultText>biuro@fifth-factor.pl</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Adres Strony Internetowei</LabelText>
                  <ResultText>https://fifth-factor.pl</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Nazwa Banku</LabelText>
                  <ResultText>Bank Milennium</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>BIC/SWIFT</LabelText>
                  <ResultText>BIGB_PLPW</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Numer Konta Bankowego do wplat</LabelText>
                  <ResultText>2011 6022 0200 0000 0540 6157 82</ResultText>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ ml: "auto" }}></Grid>
          </CardContent>
        </Card>
        <Grid container spacing={4} sx={{ mt: "2rem" }}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Dane Kontrahenta" />
              <CardContent>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Nazwa Kontrahenta</LabelText>
                      <ResultText>Primavera Sp. z o. o.</ResultText>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Numer NIP Kontrahenta</LabelText>
                      <ResultText>5851445985</ResultText>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Numer REGON Kontrahenta</LabelText>
                      <ResultText>123456789</ResultText>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: "2rem" }}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Parametry Faktoringu" />
              <CardContent>
                <Grid
                  container
                  spacing={4}
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Numer Faktury</LabelText>
                      <ResultText>FVS/12/1056</ResultText>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Data Wystawienia Faktory:</LabelText>
                      <ResultText>10/03/2022</ResultText>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Data P??atno??ci Faktory:</LabelText>
                      <ResultText>10/22/2022</ResultText>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item xs={12} sm={6}>
                    <FormGroup>
                      <Typography variant="p">Metoda P??atno??ci</Typography>
                      <Box sx={{ display: "flex" }}>
                        <FormControlLabel
                          control={<Checkbox checked={true} />}
                          label="Przelew Ekspresowy"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={false} />}
                          label="Przelew Tradycyjny"
                        />
                      </Box>
                    </FormGroup>
                    <FormGroup>
                      <Typography variant="p">Ubezpieczenie</Typography>
                      <Box sx={{ display: "flex" }}>
                        <FormControlLabel
                          control={<Checkbox checked={false} />}
                          label="Ubezpieczenie"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={true} />}
                          label="Bez Ubezpieczenia"
                        />
                      </Box>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormGroup>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          gap: "2rem",
                        }}
                      >
                        <FormControl>
                          <LabelText>Termin Finansowania</LabelText>
                          <ResultText>21 dni</ResultText>
                        </FormControl>

                        <FormControl>
                          <LabelText>Procent Finansowania</LabelText>
                          <ResultText>100 %</ResultText>
                        </FormControl>

                        <FormControl>
                          <LabelText>Kwota Faktury</LabelText>
                          <ResultText>12 300 z??</ResultText>
                        </FormControl>
                      </Box>
                    </FormGroup>
                    <FormGroup sx={{ mt: "1rem" }}>
                      <Typography
                        sx={{ mb: "1rem", display: "block", textAlign: "left" }}
                        variant="p"
                      >
                        Kwota p??atno??ci dla wybranych parametr??w
                        <Typography
                          sx={{
                            ml: "1rem",
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          1230,00 z??
                        </Typography>
                      </Typography>
                    </FormGroup>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: "2rem" }}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Za????czone Pliki" />
              <CardContent>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  {1 === null && <Typography>No file selected.</Typography>}
                  {[1, 2].map((el) => (
                    <PdfItem
                      key={el}
                      name={"el.name"}
                      fileType={"el.type"}
                      removeFileFromFileList={() => {
                        return;
                      }}
                      disabled={true}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: "2rem" }}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Zgody" />
              <CardContent>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Wyra??am zgod?? na kontakt telefoniczny ze strony Fifth Factor Sp. z o. o. oraz otrzymywanie wiadomo??ci drog?? SMS lub poprzez e-mail w celu udzielenia mi wsparcia przy doko??czeniu procesu sk??adania niniejszego wniosku, w przypadku braku jego finalizacji."
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Wyra??am zgod?? na przetwarzanie moich danych osobowych przez Fifth Factor Sp. z o. o., KRS: 000030330 w celu marketingu w??asnych produkt??w i us??ug w??asnych Fifth Factor Sp. z o. o. Dzia??ania marketingowe b??dzie prowadzi?? Fifth Factor Sp. z o. o. lub w jego imieniu b??dzie prowadzi??a Fifth Factor Sp. z o. o. Niniejsza zgoda mo??e zosta?? odwo??ana w ka??dej chwili bez podania przyczyny, co nie wp??ywa na zgodno???? z prawem przetwarzania danych przed jej odwo??aniem. Zgadzam si??, aby Fifth Factor Sp. z o. o. lub Fifth Factor Sp. z o. o. dostarcza??y mi informacje promuj??ce us??ugi lub produkty Nest Bank S.A:"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Upowa??niam Fifth Factor sp. z o.o. do przekazania do Biura Informacji Kredytowej S.A. oraz Krajowego Rejestru D??ug??w BIG S.A. danych sp????ki, kt??r?? reprezentuj??, celem pozyskania informacji dotycz??cych sp????ki, w tym stanowi??cych tajemnic?? bankow??, w celu dokonania oceny wiarygodno??ci p??atniczej i oceny ryzyka kredytowego, r??wnie?? w trakcie obowi??zywania pomi??dzy nami umowy, a tak??e przekazania informacji dotycz??cych zobowi??zania sp????ki wynikaj??cego z umowy z Fifth Factor sp. z o.o. Wyra??am zgod?? na przetwarzanie przez Biuro Informacji Kredytowej S.A. danych przekazanych w zapytaniu nie d??u??ej ni?? 2 lata, a danych na temat zobowi??zania do odwo??ania zgody, nie d??u??ej ni?? 5 lat od jego wyga??ni??cia, oraz na ich udost??pnianie podmiotom udzielaj??cym kredyt??w i innym, kt??rym udzieli??em zgody. Zosta??em poinformowany o prawie odwo??ania zg??d."
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Dzia??aj??c na podstawie art. 104 ust. 3 ustawy z dnia 29 sierpnia 1997 r. Prawo bankowe, niniejszym upowa??niam Fifth Factor sp. z o.o. z siedzib?? w Warszawie (dalej Bank) do przekazywania Fifth Factor sp. z o.o. z siedzib?? w Warszawie, KRS 0000656462, wszelkich informacji obj??tych tajemnic?? bankow?? dotycz??cych umowy zawartej z Bankiem. Upowa??nienie udzielone jest na czas nieokre??lony i mo??e by?? w ka??dej chwili odwo??anie."
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="O??wiadczam, ??e nie jestem PEP*, tj.: osob?? zajmuj??c?? eksponowane stanowisko polityczne (PEP), cz??onkiem rodziny PEP lub osob?? znan?? jako bliski wsp????pracownik PEP i zobowi??zuj?? si?? do niezw??ocznego poinformowania Fifth Factor sp. z o.o. o wszelkich zmianach danych obj??tych o??wiadczeniem (adres mailowy: kontakt@faktoria.pl). Jestem ??wiadomy/a odpowiedzialno??ci karnej za z??o??enie fa??szywych o??wiadcze??. Przez PEP rozumie si?? w szczeg??lno??ci: szef??w pa??stw, cz??onk??w rz??du, parlamentu i zarz??d??w partii, cz??onk??w s??d??w najwy??szych, trybuna????w, zarz??d??w bank??w centralnych, ambasador??w, oficer??w si?? zbrojnych, cz??onk??w organ??w przedsi??biorstw pa??stwowych i z udzia??em Skarbu Pa??stwa, cz??onk??w organ??w organizacji mi??dzynarodowych oraz urz??d??w naczelnych, centralnych i wojew??dzkich, oraz inne osoby zajmuj??ce stanowiska lub funkcje publiczne w organach pa??stwa lub administracji rz??dowej. Szczeg????owa lista os??b b??d??cych PEP, cz??onkiem rodziny PEP lub osob?? znan?? jako bliski wsp????pracownik PEP znajduje si?? pod adresem https://fifth-factor.pl/PEP-definicja.pdf."
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: "2rem" }}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Dodotkowe Informacje" />
              <CardContent>
                <Box
                  sx={{
                    mt: "1rem",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: "<p>Prosz?? o pieni??dze, mam hory kod</p>",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return null;
  }
};
export default PreviewCard;
