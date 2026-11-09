import { Body, Controller, Delete, Get, Param, Post, Put, HttpCode, HttpStatus, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js'
import { ProfilesGuard } from './profiles.guard.js';
import type { UUID } from 'crypto';


@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profileService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: UUID, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profileService.remove(id);
  }
}
