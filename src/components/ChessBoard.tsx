import { FC } from 'react';
import ChessPiece from './ChessPiece';

interface ChessBoardProps {
  interactive?: boolean;
  simplified?: boolean;
  size?: number;
}

const ChessBoard: FC<ChessBoardProps> = ({ 
  interactive = false, 
  simplified = false,
  size = 400 
}) => {
  const cellSize = size / 8;
  
  // Начальная расстановка фигур
  const initialPosition = simplified ? [
    // Упрощенная доска с меньшим количеством фигур для детей
    ['rook', '', '', '', '', '', '', 'rook'],
    ['', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', ''],
    ['rook', '', '', 'king', 'queen', '', '', 'rook'],
  ] : [
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
  ];

  // Создаем доску 8x8
  const renderBoard = () => {
    const board = [];
    
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        const piece = initialPosition[row][col];
        const pieceColor = row < 2 ? 'black' : 'white';
        
        board.push(
          <div 
            key={`${row}-${col}`}
            className={`${isBlack ? 'bg-chess-dark' : 'bg-chess-light'} 
                        ${interactive ? 'cursor-pointer hover:opacity-80' : ''}`}
            style={{ 
              width: cellSize,
              height: cellSize,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {piece && <ChessPiece 
              type={piece as any} 
              color={pieceColor} 
              size={cellSize * 0.7} 
            />}
          </div>
        );
      }
    }
    
    return board;
  };

  return (
    <div 
      className="border-4 border-chess-dark rounded-md overflow-hidden shadow-lg"
      style={{ 
        width: size,
        height: size,
        display: 'grid',
        gridTemplateColumns: `repeat(8, ${cellSize}px)`,
        gridTemplateRows: `repeat(8, ${cellSize}px)`,
      }}
    >
      {renderBoard()}
    </div>
  );
};

export default ChessBoard;
