import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";



const Footer = () => {
const { palette: { neutral },
} = useTheme();
return <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
    <Box
    width="80%"
    margin="auto"
    display="flex"
    justifyContent="space-between"
    flexWrap="wrap"
    rowGap="30px"
    columnGap="clamp(20px, 30px, 40px)"
    >
    <Box width="clamp(20%, 30%, 40%)">
        <Typography
        variant="h4"
        fontWeight="bold"
        mb="30px"
        color={shades.secondary[500]}
        
        >
        BCC
        </Typography>
       <div>
       A good t-shirt does not shrink after washing, nor do they twist as much as other t-shirts, which often lose their colour and shape. The fabric on a good t-shirt looks finer and feels more refined, the neck bindings are symmetrical and not twisted, the stitch lengths are shorter and neater, the labels are neatly attached and there are no loose threads in the garment or around the label. A good t-shirt will feel far smoother and lighter than most other t-shirts.
       </div>
    </Box>

    <Box>

        <Typography variant="h4" fontWeight="bold" mb="30px">
            About us
        </Typography>
        <Typography mb="30px">Careers</Typography>
        <Typography mb="30px">Our Store</Typography>
        <Typography mb="30px">Terms & Conditions</Typography>
        <Typography mb="30px">Privacy Policy</Typography>
    </Box>

    <Box>
<Typography variant="h4" fontWeight="bold" mb="30px">
    Customer Care
</Typography>
<Typography mb="30px">Help Center</Typography>
<Typography mb="30px">Track Your Order</Typography>
<Typography mb="30px">Corporate & Bulk Purchasing</Typography>
<Typography mb="30px">Returns & Refunds</Typography>
</Box>

<Box width="clamp(20%, 25%, 30%)">
<Typography variant="h4" fontWeight="bold" mb="30px">
    Contact Us
</Typography>
<Typography mb="30px">Frankfurt, Deutschland</Typography>
<Typography mb="30px">Email: bicicibcc@gmail.com</Typography>
<Typography mb="30px">(222)333-4444</Typography>

       
    </Box>

    </Box>
</Box>

}

export default Footer;