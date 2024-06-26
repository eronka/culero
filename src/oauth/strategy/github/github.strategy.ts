import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github2';
@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(clientID: string, clientSecret: string, callbackURL: string) {
    super({
      clientID,
      clientSecret,
      callbackURL,
      scope: ['public_profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<Profile> {
    return profile;
  }
}
