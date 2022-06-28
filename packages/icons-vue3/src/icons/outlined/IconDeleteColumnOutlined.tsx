// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeleteColumnOutlinedSvg from 'gupo-icons-base/es/asn/DeleteColumnOutlined';

export interface DeleteColumnOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDeleteColumnOutlined: DeleteColumnOutlinedIconType = (props, context) => (
    <Icon name='DeleteColumnOutlined' {...{ ...props, ...context.attrs }} icon={DeleteColumnOutlinedSvg} />
);

IconDeleteColumnOutlined.displayName = 'IconDeleteColumnOutlined';
IconDeleteColumnOutlined.theme = 'outlined';
IconDeleteColumnOutlined.originName = 'delete-column';

export default IconDeleteColumnOutlined;
