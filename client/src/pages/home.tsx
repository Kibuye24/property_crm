import { useList } from "@pankod/refine-core";
import { Box, Typography, Stack } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[25, 75]}
          colors={["#465be8", "#b4e9ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={500}
          series={[75, 25]}
          colors={["#465be8", "#b4e9ef"]}
        />
        <PieChart
          title="Total Customers"
          value={280}
          series={[60, 40]}
          colors={["#465be8", "#b4e9ef"]}
        />
        <PieChart
          title="Total Cities"
          value={300}
          series={[55, 45]}
          colors={["#465be8", "#b4e9ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Latest Properties
        </Typography>
        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property._title}
              location={property._location}
              price={property._price}
              photo={property._photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
