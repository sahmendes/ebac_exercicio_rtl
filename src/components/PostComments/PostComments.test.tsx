import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve adicionar dois comentários', () => {
        render(<PostComments />);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Primeiro comentário de teste',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentário de teste',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getByText('Segundo comentário de teste')).toBeInTheDocument();
        
        expect(screen.getAllByTestId('comment')).toHaveLength(2);
    });
});