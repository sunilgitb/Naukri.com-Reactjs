import { BsBriefcase } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { BiMoney } from 'react-icons/bi';
import { Box, Heading, Text, HStack, Button } from '@chakra-ui/react';
import "./jobDescription.css"
const JobDescription = () => {
  const { id } = useParams();
  const { searchData } = useSelector(state => state);

  let temp = searchData.filter(job => (job.id == id ? { ...job } : null));
    function applyToSite(url)
    {
        window.open(url,"_blank");
    }
  console.log(temp);
  return (
    <div>
        <Box className='topBlueBar'></Box>
      {temp.map(job => (
        <Box className='companyInfo'  key={job.id}>
          <Box className='topJobSection' >
            <Heading  as="h1">{job.title}</Heading>
            <Text className='companyName' >{job.company_name} 3.7 <StarIcon w={3} marginBottom={1} color="#feaa00" />{' '} </Text>
            <Text className='searchPara' >
              {' '}
              <Icon as={BsBriefcase} /> 3 - 5 years
            </Text>
            <HStack justifyContent="space-between" >
            <Box>
            <Text className='searchPara' > <Icon as={BiMoney} /> {job.salary === '' ? 'Not Disclosed' : job.salary}</Text>

            <Text className='searchPara' >
              {' '}
              <Icon as={GoLocation} /> {job.candidate_required_location}
            </Text>
            </Box>
            <Box>
                <Button variant='outline'colorScheme='blue' >Saved</Button>
                <Button onClick={()=>applyToSite(job.url)} colorScheme='blue' >APPLY ON COMPANY SITE</Button>
            </Box>
            </HStack>
          </Box>

          <Box className='description' >
            <Text  >Job Description</Text>
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </Box>

        </Box>
      ))}
    </div>
  );
};

export default JobDescription;