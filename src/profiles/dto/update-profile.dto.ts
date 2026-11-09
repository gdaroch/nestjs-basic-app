import { IsString, MinLength, MaxLength } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MaxLength(300)
  description: string;
}