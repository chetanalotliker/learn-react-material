import Github from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/LinkedIn";
import { Slider } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Badge from "@mui/material/Badge";
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from '@mui/material/FormLabel';
import Icon from "@mui/material/Icon";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

import './App.css';

function App() {

  const topFilms = () => [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 }
  ];
  return (
    <div className="App">
      <Button variant="contained">Hello world</Button>
      <br />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topFilms()}
        sx={{ width: 400 }}
        renderInput={(params) =>
          <TextField {...params} label="Movie" />}
      />
      <br />
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <br />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked
            size="small"
            color="success" />}
          label="Small Checkbox"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked
            color="secondary" />}
          label="Medium Checkbox"
        />
        <FormControlLabel
          control={<Checkbox color="error" />}
          label="Large Checkbox"
          sx={{
            "& .MuiSvgIcon-root":
              { fontSize: 28 }
          }}
        />
      </FormGroup>
      <br />
      <h5>Floating action buttons</h5>
      <Fab color="success">
        <Github />
      </Fab>
      <Fab color="primary">
        <Linkedin />
      </Fab>
      <FormControl>
        <FormLabel>Radio</FormLabel>
        <RadioGroup>
          <FormControlLabel control={<Radio />}
            label="option1" />
          <FormControlLabel control={<Radio />}
            label="option2" />
        </RadioGroup>
      </FormControl>
      <h5>Slider</h5>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto" />
      <br />
      <TextField
        label="Small Outlined Input"
        variant="outlined"
        size="small"
        color="warning"
        style={{ marginRight: 10 }}
      />
      <h5>Badge</h5><br />
      <Badge badgeContent={4} color="primary">
        <Icon color="action" />
      </Badge>
    </div>
  );
}

export default App;
