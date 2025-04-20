import { FC } from 'react';

type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
type PieceColor = 'white' | 'black';

interface ChessPieceProps {
  type: PieceType;
  color: PieceColor;
  size?: number;
  className?: string;
}

const ChessPiece: FC<ChessPieceProps> = ({ type, color, size = 50, className = "" }) => {
  // Эмодзи шахматных фигур
  const pieces = {
    white: {
      pawn: '♙',
      rook: '♖',
      knight: '♘',
      bishop: '♗',
      queen: '♕',
      king: '♔',
    },
    black: {
      pawn: '♟',
      rook: '♜',
      knight: '♞',
      bishop: '♝',
      queen: '♛',
      king: '♚',
    }
  };

  const pieceSymbol = pieces[color][type];
  
  return (
    <span 
      className={`inline-block ${className}`} 
      style={{ 
        fontSize: `${size}px`, 
        lineHeight: 1,
      }}
    >
      {pieceSymbol}
    </span>
  );
};

export default ChessPiece;
