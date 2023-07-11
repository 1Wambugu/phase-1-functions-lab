// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hqStreet = 42; // Headquarters street number
    return Math.abs(blocks - hqStreet);
  }
  function distanceFromHqInBlocks(blocks) {
    const hqStreet = 42; // Headquarters street number
    return Math.abs(hqStreet - blocks);
  }
  function distanceFromHqInBlocks(street) {
    const hqStreet = 42; // Headquarters street number
    return Math.abs(hqStreet - street);
  }
  function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; // Number of feet in one block
    return blocks * blockInFeet;
  }
  function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; // Number of feet in one block
    return blocks * blockInFeet;
  }
  function distanceFromHqInFeet(street) {
    const hqStreet = 42; // Headquarters street number
    const blockInFeet = 264; // Number of feet in one block
  
    if (street >= hqStreet) {
      return (street - hqStreet) * blockInFeet;
    } else {
      return (hqStreet - street) * blockInFeet;
    }
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // Number of feet in one block
    const distanceInBlocks = Math.abs(endBlock - startBlock);
  
    return distanceInBlocks * blockInFeet;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // Number of feet in one block
    const distanceInBlocks = Math.abs(endBlock - startBlock);
  
    return distanceInBlocks * blockInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
  
    if (distanceInBlocks <= 1) {
      return 0; 
    }
  
    }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264; // Convert blocks to feet
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    }
  
    // Rest of the fare calculation logic goes here
  
    // Return the calculated fare
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264; // Convert blocks to feet
  
    if (distanceInFeet <= 400) {
      return 0; // Free fare for the first 400 feet
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distanceInFeet > 2000) {
      return 25; // Flat fare of 25 dollars for distance over 2000 feet
    }
  
    // Rest of the fare calculation logic goes here
  
    // Return the calculated fare
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264; // Convert blocks to feet
  
    if (distanceInFeet <= 400) {
      return 0; // Free fare for the first 400 feet
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of 25 dollars for distance between 2000 and 2500 feet
    } else {
      return 'Cannot calculate fare for rides over 2500 feet'; // Fare calculation not allowed for distance over 2500 feet
    }
  
    // Rest of the fare calculation logic goes here
  
    // Return the calculated fare
  }
  