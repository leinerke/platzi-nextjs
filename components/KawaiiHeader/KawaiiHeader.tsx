import React, { useEffect, useState } from 'react';
import PuesVivo from './AnimatedHeader';
import PuesMuero from './RottenHeader';
import Modal from '@components/Modal/Modal';
import { PosMeMuero } from '@components/SVGIcons';

type TStateKawaiiHeader = {
  count: number,
  complete: boolean,
  visible: boolean,
  meMori: boolean,
  modalOpen: boolean;
}

const KawaiiHeader = () => {
  const [state, setState] = useState<TStateKawaiiHeader>({
    count: 0,
    complete: true,
    visible: false,
    meMori: false,
    modalOpen: false,
  });

  const toggleVisible = () => {
    if (state.complete) {
      setState(prevState => ({
        ...prevState,
        count: prevState.count + 1,
        visible: !prevState.visible,
        complete: !prevState.complete,
      }));

      setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          visible: !prevState.visible,
          complete: !prevState.complete,
        }));
      }, 900);
    }
  };

  const closeModal = () => {
    setState(prevState => ({
      ...prevState,
      modalOpen: false,
    }));
  };

  useEffect(() => {
    toggleVisible();
  }, []);

  useEffect(() => {
    if (state.count === 5) {
      setState(prevState => ({
        ...prevState,
        meMori: true,
        modalOpen: true,
      }));
    }
  }, [state.count]);

  return (
    <div className="mb-8">
      {state.meMori
        ? (<PuesMuero />)
        : (<PuesVivo
            visible={state.visible}
            onClick={toggleVisible}
          />
        )}
      {state.modalOpen && (
        <Modal>
          <div className="grid grid-cols-2">
            <div>
              <PosMeMuero size="154px" />
            </div>
            <div>
              <h2 className="text-2xl mb-4">Mataste el aguacate</h2>
              <p className="mb-2">Lo tocaste tanto que lo mataste.</p>
              <p className="mb-2">Por otro lado, eres una persona muy curiosa y has descubierto esto. :)</p>
              <button
                onClick={closeModal}
                className="py-2 px-4 bg-gray-500 text-white rounded mt-2 transition-colors hover:bg-sky-500"
              >
                Ay, lo siento
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default KawaiiHeader;
