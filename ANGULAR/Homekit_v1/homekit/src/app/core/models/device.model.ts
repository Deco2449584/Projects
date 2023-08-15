// src/app/core/models/device.model.ts

export interface Device {
  id: string;
  name: string;
  type: string;
  status: string; // Esto puede ser más específico según tus necesidades, por ejemplo, podría ser un enum o una union type.
}
