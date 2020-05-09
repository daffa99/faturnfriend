import { Button, Icon } from "semantic-ui-react";

const generateListMateri = (
  listMateri,
  jenjang,
  kelas,
  mataPelajaran,
  props
) => {
  let listMateriPelajaran = Object.keys(
    listMateri[jenjang][kelas][mataPelajaran]
  ).map((materi) => {
    let id = materi.replace(/\s+/g, "-").toLowerCase();
    return (
      <li>
        <a href={`#${id}`}>
          <Button
            onClick={() =>
              props.handleMateri(jenjang, kelas, mataPelajaran, materi)
            }
            color="blue"
          >
            {materi}
          </Button>
        </a>
      </li>
    );
  });
  return listMateriPelajaran;
};

export const generateMateriMataPelajaran = (
  listMateri,
  jenjang,
  kelas,
  props
) => {
  let listMateriMataPelajaran = Object.keys(listMateri[jenjang][kelas]).map(
    (mataPelajaran) => {
      return (
        <React.Fragment>
          <li>
            <a href={`#${mataPelajaran}`} data-toggle="collapse">
              <Button color="teal">
                {mataPelajaran} <Icon name="triangle right" />
              </Button>
            </a>
          </li>
          <div
            id={`${mataPelajaran}`}
            className="collapse"
            data-parent="#mata-pelajaran"
          >
            {generateListMateri(
              listMateri,
              jenjang,
              kelas,
              mataPelajaran,
              props
            )}
          </div>
        </React.Fragment>
      );
    }
  );
  return <div id="mata-pelajaran">{listMateriMataPelajaran}</div>;
};

export const generateKelas = (listMateri, jenjang, props) => {
  let listKelas = Object.keys(listMateri[jenjang]).map((e) => {
    let id = e.replace(/\s+/g, "-").toLowerCase();
    return (
      <React.Fragment>
        <li>
          <a href={`#${id}`} data-toggle="collapse">
            <Button
              toggle
              active={props.kelasActive === e ? true : false}
              onClick={() => props.handleKelas(e)}
            >
              {e} <Icon name="triangle right" />
            </Button>
          </a>
        </li>
        <div
          className="list-mapel collapse"
          id={id}
          data-parent={`#${jenjang}`}
        >
          {generateMateriMataPelajaran(listMateri, jenjang, e, props)}
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="list-kelas collapse" id={jenjang} data-parent="#accordion">
      <ul className="list-unstyled">{listKelas}</ul>
    </div>
  );
};
