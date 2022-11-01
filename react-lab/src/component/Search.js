import React, {useState} from 'react'
import {Input, InputGroup,
Box,
Flex,
Image,
Button} from '@chakra-ui/react';
import {Array} from './Cards'

function Search() {
  const [search, setSearch] = useState([" "]);

  return (
    <div>
    <InputGroup>
                <Input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => {
                    e.preventDefault();
                    setSearch(e.target.value);
                  }}
                  data={Array}
                />
                <Button>
                  <Image src="search.png" width="90%" height="80%" />
                </Button>
                <Box>
                {Array.filter((Card) => Card.name.toLowerCase().include(search))
                .map((Card) => (
                    <Flex key={Card.name}>{Card.name}</Flex>
                  )
                )}
              </Box>
      </InputGroup>
    </div>
  )
}

export default Search