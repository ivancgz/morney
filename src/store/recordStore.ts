import clone from '@/lib/clone';
const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date().toISOString();
    this.recordList?.push(record2);
    recordStore.saveRecords();
  }
};

recordStore.fetchRecords();

export default recordStore;