import * as levels from '../constants/expTypes';

module.exports = {
  checkLevel: (user) => {
    let level = 0;
    if (user.totalXp < levels.XP_LEVEL_1) {
      level = 1;
    } else if (user.totalXp < levels.XP_LEVEL_2) {
      level = 2;
    } else if (user.totalXp < levels.XP_LEVEL_3) {
      level = 3;
    } else if (user.totalXp < levels.XP_LEVEL_4) {
      level = 4;
    } else {
      level = 5;
    }
    if (level !== user.level) {
      // If the level changed, update information in the database
      user.level = level;
      fetch('/api/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: user,
      })
      .then(() => console.log('Successfully updated user', user.id))
      .catch((err) => console.error('There was a problem updating user\'s level:', err));
    }
    return level;
  },
};
