interface ItemSetAssociation {
  baseRecord: string;
  setName: string;
}

/* == BEGIN MAGIC == */

// tslint:disable-next-line
declare abstract class data {
  public static itemSetAssociations: string;
}

/* == END MAGIC == */


let dataset = [] as Array<ItemSetAssociation>;

// Returns the set name or undefined
export default function GetSetName(baseRecord: string): string | undefined {
  if (dataset.length === 0) {
    if (typeof data !== 'undefined' && typeof data.itemSetAssociations !== 'undefined') {
      dataset = JSON.parse(data.itemSetAssociations);
      console.log('Parsed item sets into', dataset);
    }
  }

  const elems = dataset.filter(elem => elem.baseRecord === baseRecord);
  if (elems.length > 0) {
    return elems[0].setName;
  }

  // console.log('Could not find entry for', baseRecord, 'in', elems, dataset);


  return undefined;
}