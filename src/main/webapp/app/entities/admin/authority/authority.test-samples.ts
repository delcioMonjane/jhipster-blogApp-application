import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7b339016-2ad6-4d94-9953-db97084d649b',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c8f0a744-0087-4ee0-bbcb-850dd8bdda98',
};

export const sampleWithFullData: IAuthority = {
  name: 'eb881524-4720-482b-b764-de2df75b9223',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
