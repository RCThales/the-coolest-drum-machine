interface VolumeState {
  volume: number;
}

interface VolumeRootState {
  volume: VolumeState;
}

interface LibraryState {
  currentLibrary: Libs;
}

interface LibraryRootState {
  library: LibraryState;
}
